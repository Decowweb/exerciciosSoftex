package calc;

import javax.xml.ws.Endpoint;

public class CalculadoraServerPublisher {

  public static void main(String[] args)
  {
    Endpoint.publish("http://localhost:8080/",
    new CalculadoraServerImpl());
  }
}