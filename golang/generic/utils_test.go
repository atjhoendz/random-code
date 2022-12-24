package generic

func Test_ValueOrDefault(t *testing.T) {
    assert.EqualValues(t, 10, ValueOrDefault[int64](0, 10))
    assert.EqualValues(t, 10, ValueOrDefault[int64](10, 100))

    assert.EqualValues(t, "kucing", ValueOrDefault[string]("", "kucing"))
    assert.EqualValues(t, "kambing", ValueOrDefault[string]("kambing", "kucing"))

    assert.EqualValues(t, 10.1, ValueOrDefault[float64](0.0, 10.1))
    assert.EqualValues(t, 11.2, ValueOrDefault[float64](11.2, 10.1))
}
