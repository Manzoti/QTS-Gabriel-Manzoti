import {
    assertStringIncludes,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("Test StringInclude para ver se tem uma palavra do outro lado:", () => {
    assertStringIncludes("Meu nome inteiro é Gabriel de Castro Manzoti", "Gabriel");
});

Deno.test("Test StringInclude para ver se tem uma palavra do outro lado:", () => {
    assertStringIncludes("Meu sobrenome é Castro", "Castro");
    assertStringIncludes("Tambem tenho Manzoti no meu nome", "Manzoti");
});

