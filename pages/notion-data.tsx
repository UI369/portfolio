import { Client } from "@notionhq/client";
import { GetStaticProps } from "next";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

type NotionItem = {
  id: string;
  // Add other properties based on your Notion database structure
};

type NotionDataProps = {
  data: NotionItem[];
};

const NotionData: React.FC<NotionDataProps> = ({ data }) => {
  return (
    <div>
      {/* Render your data here */}
      {data.map((item) => (
        <div key={item.id}>{/* Display item properties */}</div>
      ))}
    </div>
  );
};

export default NotionData;

export const getStaticProps: GetStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId as string,
  });

  return {
    props: {
      data: response.results,
    },
  };
};
