export type OperationDescriptionHookT = string[];

export type OperationDescriptionT = {
  instructions: {
    title: string;
    description: string;
    body: OperationDescriptionHookT;
  }
}

