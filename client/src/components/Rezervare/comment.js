  {/* Trebuie sa o gandesc in alta parte */}
              {/*  <Stack
            sx={{ border: "1px solid black", borderBottom: "none" }}
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            spacing={2}
            p={2}
          >
             <Stack
              height="50px"
              width="50px"
              bgcolor="black"
              borderRadius={50}
              color="white"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                9.9
              </Typography>
            </Stack> 
            <Typography variant="h6">Excelent</Typography> 
          </Stack>
        */}

        {/* <Stack
          mt={12}
          p={2}
          pt={0}
          mr={2}
          spacing={3}
          width={"100%"}
          sx={{ maxWidth: "400px" }}
        >
          <Stack
            sx={{ border: "1px solid black", borderBottom: "none" }}
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            spacing={2}
            p={2}
          >
            <Stack
              height="50px"
              width="50px"
              bgcolor="black"
              borderRadius={50}
              color="white"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                9.8
              </Typography>
            </Stack>
            <Typography variant="h6">Excelent</Typography>
          </Stack>
          <Stack
            p={2}
            mt={0}
            sx={{
              border: "1px solid black",
              borderTop: "none",
              margin: "0 !important",
            }}
          >
            <Typography variant="body1">Rezervarea mea</Typography>
            <Stack direction="row" justifyContent="flex-start" mt={1}>
              <Stack direction="row" alignItems="center" spacing={0.8}>
                <FontAwesomeIcon
                  icon={faPersonWalkingLuggage}
                  fontSize="30px"
                  justifyContent="flex-end"
                />
                <Typography sx={{ fontSize: "15px" }}>
                  {fromDay} {fromMonth}
                </Typography>
              </Stack>
              <ArrowForwardIcon sx={{ margin: "0px 10px 0px 10px" }} />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0.8}
              >
                <FontAwesomeIcon
                  icon={faPersonWalkingLuggage}
                  fontSize="30px"
                />
                <Typography sx={{ fontSize: "15px" }}>
                  {toDay} {toMonth}
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="body2" mt={2}>
              Rezervare pentru {numberNights}{" "}
              {numberNights === 1 ? "o noapte" : "nopti"}
            </Typography>
            <StripeCheckout
              disabled={isPayDisabled}
              token={onToken}
              currency="RON"
              amount={amount * 100}
              stripeKey="pk_test_51KytTpLuy8CHjVd0G4MYwWK4W02WJuBq8vTR3xijRHkt0Z8nDjpvcWjXXCgftskcgUyWOuJWAe9VgoHvZ9xaUlVW00m9vpL7V9"
            >
              <Button variant="text">Booknow</Button>
            </StripeCheckout>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <TextField
              className={classes.textField}
              label="COD PROMOTIONAL"
              variant="outlined"
              size="small"
              sx={{ marginTop: "20px" }}
            />
            <Button
              variant="outlined"
              style={btnStyle}
              sx={{ marginTop: "20px", height: "40px", borderRadius: "0px" }}
            >
              Verifica
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <PhoneIcon sx={{ fontSize: 40 }} />
            <Stack direction="column" justifyContent="flex-start">
              <Typography variant="body1">0773346017</Typography>
              <Typography variant="body2">
                Aveti nevoie de ajutor? Suna-ne.
              </Typography>
            </Stack>
          </Stack>
        </Stack> */}