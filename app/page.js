import FAQ from "@/components/FAQ";
import Product from "@/components/Product";
import Description from "@/components/Description";
import CTA from "@/components/CTA";
import { getDatabase } from "@/lib/fetch";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

export default async function Home() {
  const database = await getDatabase();
  return (
    <>
      <Product database={database} />
      <Description database={database} />
      <CTA />
      <FAQ database={database} />
    </>
  );
}
