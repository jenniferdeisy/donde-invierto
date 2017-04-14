package Tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.Before;
import org.junit.Test;

import clases.Inversor;


public class TestInversor {
	// Usuario
	String nombreCarlo = "Carlito";
	Inversor carlo = new Inversor(nombreCarlo);

	
	@Before
	public void setUp() {
		/*
		 * Configuramos condiciones que queremos para cada test
		 */
	}

	@Test
	public void testSeCreaUsuarioConNombre() {
		assertTrue(carlo.getNombre() == nombreCarlo);
	}

	
}
