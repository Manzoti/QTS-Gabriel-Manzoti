import {
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("Teste de AssertArray com números:", () => {
    assertArrayIncludes([1743, 219, 4], [219]);
    });

Deno.test("Teste de AssertArray com escrita:", () => {
    assertArrayIncludes(Array.from("Aula de QTS"), Array.from("QTS"));
});