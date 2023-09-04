// pages/api/databases.ts

import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Handle the POST request logic here.
    // For example, you can interact with the Notion API using the `notion` client.
    // const response = await notion.someMethod();
    // res.json(response);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
