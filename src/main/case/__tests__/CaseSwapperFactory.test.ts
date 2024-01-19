import CaseSwapperFactory from "../CaseSwapperFactory";
import { Cases } from "../TextCase";
import * as swapper from "../swapper";

describe("CaseSwapperFactory", () => {
  describe("getCaseSwapper", () => {
    it("with 'Cases.Upper' returns UppercaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Upper)).toBeInstanceOf(swapper.UppercaseSwapper);
    });

    it("with 'Cases.Lower' returns LowercaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Lower)).toBeInstanceOf(swapper.LowercaseSwapper);
    });

    it("with 'Cases.Title' returns TitleCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Title)).toBeInstanceOf(swapper.TitleCaseSwapper);
    });

    it("with 'Cases.Camel' returns CamelCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Camel)).toBeInstanceOf(swapper.CamelCaseSwapper);
    });

    it("with 'Cases.Constant' returns ConstantCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Constant)).toBeInstanceOf(swapper.ConstantCaseSwapper);
    });

    it("with 'Cases.Dot' returns DotCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Dot)).toBeInstanceOf(swapper.DotCaseSwapper);
    });

    it("with 'Cases.Kebab' returns KebabCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Kebab)).toBeInstanceOf(swapper.KebabCaseSwapper);
    });

    it("with 'Cases.Pascal' returns PascalCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Pascal)).toBeInstanceOf(swapper.PascalCaseSwapper);
    });

    it("with 'Cases.Path' returns PathCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Path)).toBeInstanceOf(swapper.PathCaseSwapper);
    });

    it("with 'Cases.Sentence' returns SentenceCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Sentence)).toBeInstanceOf(swapper.SentenceCaseSwapper);
    });

    it("with 'Cases.Snake' returns SnakeCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Snake)).toBeInstanceOf(swapper.SnakeCaseSwapper);
    });

    it("with 'Cases.Invert' returns InvertCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Invert)).toBeInstanceOf(swapper.InvertCaseSwapper);
    });

    it("with 'Cases.Rage' returns RageCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(Cases.Rage)).toBeInstanceOf(swapper.RageCaseSwapper);
    });
  });
});
