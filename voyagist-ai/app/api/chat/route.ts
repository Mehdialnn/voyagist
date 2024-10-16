import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const template = `You are a helpful travel assistant. Extract the following information from the user's query:
1. City or location (cityCode)
2. Check-in date (checkInDate)
3. Check-out date (checkOutDate)
4. Number of rooms (roomQuantity)
5. Number of adults (adults)
6. Ages of children, if any (childAges)
7. Price range (priceRange)
8. Preferred currency (currency)
9. Board type (e.g., breakfast included) (boardType)
10. Hotel amenities (amenities)
11. Preferred view (e.g., ocean view) (view)
12. Sorting preference (sort)
13. Hotel ratings (ratings)
14. Chain codes (chainCodes)
15. Rate codes (rateCodes)
16. Specific latitude and longitude, if mentioned (latitude, longitude)
17. Preferred language for results (lang)
18. Radius for search around a point (radius)
19. Unit for radius (radiusUnit)

User query: {question}

Respond in JSON format, including only the fields that can be extracted from the query.`;

export async function POST(req: Request) {
  const { question } = await req.json();

  if (!question) {
    return NextResponse.json({ error: "Missing question" }, { status: 400 });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [
        { role: "system", content: template },
        { role: "user", content: question }
      ],
      functions: [
        {
          name: "search_hotels",
          description: "Search for hotels based on user query",
          parameters: {
            type: "object",
            properties: {
              cityCode: { type: "string" },
              checkInDate: { type: "string" },
              checkOutDate: { type: "string" },
              roomQuantity: { type: "string" },
              adults: { type: "string" },
              childAges: { type: "string" },
              priceRange: { type: "string" },
              currency: { type: "string" },
              boardType: { type: "string" },
              amenities: { type: "array", items: { type: "string" } },
              view: { type: "string" },
              sort: { type: "string" },
              ratings: { type: "array", items: { type: "string" } },
              chainCodes: { type: "array", items: { type: "string" } },
              rateCodes: { type: "array", items: { type: "string" } },
              latitude: { type: "number" },
              longitude: { type: "number" },
              lang: { type: "string" },
              radius: { type: "number" },
              radiusUnit: { type: "string" }
            },
            required: ["cityCode"]
          }
        }
      ],
      function_call: { name: "search_hotels" }
    });

    const functionCall = response.choices[0].message.function_call;
    if (functionCall && functionCall.name === "search_hotels") {
      const args = JSON.parse(functionCall.arguments);
      return NextResponse.json(args);
    } else {
      return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 });
    }
  } catch (error) {
    console.error('AI response error:', error);
    return NextResponse.json({ error: 'An error occurred while getting AI response.' }, { status: 500 });
  }
}
