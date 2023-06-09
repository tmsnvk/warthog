export type ButtonDescriptionHookT = string[];

export type ButtonDescriptionT = {
  instructions: {
    title: string;
    description: string;
    body: ButtonDescriptionHookT;
  }
}

