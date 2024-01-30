package com.crudzao.enumns;

public enum Category {

  BACK_END("Back-end"),
  FRONT_END("Front-end"),
  DATA_BASE("Data-base");

  private String value;

  private Category(String value) {
    this.value = value;
  }

  public String getValue() {
    return this.value;
  }

  @Override
  public String toString() {
    return this.value;
  }
}
