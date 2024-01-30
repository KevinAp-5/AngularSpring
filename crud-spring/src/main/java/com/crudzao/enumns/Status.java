package com.crudzao.enumns;

public enum Status {
  ACTIVE("Active"),
  INACTIVE("Inactive");

  private String value;

  private Status(String value) {
    this.value = value;
  }

  public String getValue() {
    return this.value;
  }

  @Override
  public String toString() {
    return this.getValue();
  }
}
