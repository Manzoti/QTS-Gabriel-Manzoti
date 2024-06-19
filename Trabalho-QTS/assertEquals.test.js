import {
    assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

    Deno.test("Teste de Equals:", () => {
        assertEquals("Bom dia!", "Bom dia!");
    });

    Deno.test("Teste de Equals:", () => {
        assertEquals("Boa noite!", "Boa noite!");
    });

    Deno.test("Teste de Equals com números:", () => {
        assertEquals(1, 1);
    });