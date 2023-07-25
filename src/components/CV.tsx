import emailjs from "@emailjs/browser"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Dialog, DialogContent, Grid, Stack, TextField, Typography } from "@mui/material"
import { useState, useTransition } from "react"
import { Controller, useForm } from "react-hook-form"

import { LoadingButton } from "@mui/lab"
import Content from "components/Wrappers/Content"
import schema from "config/validation"
import ThankYou from "./ThankYou"
import Section from "./Wrappers/Section"

export default function CV() {
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      "Full Name": "",
      "Reply To": "",
      Description: "",
    },
  })

  const onToggle = () => {
    startTransition(() => setOpen(prev => !prev))
    !isPending && reset()
  }

  const onSubmit = (data: FormData) =>
    emailjs
      .send("service_tqc6hq3", "template_392nprf", data as any, "zAMVMo66_fS2NMF6H")
      .then(response => console.log("SUCCESS!", response.status, response.text))
      .catch(error => console.log("FAILED...", error))
      .finally(() =>
        setTimeout(() => {
          onToggle()
          setTimeout(() => reset(), 1000)
        }, 4000)
      )

  return (
    <Section
      id="cv"
      title="Wanna work together?"
      subheader="Cooperation & Curriculum vitae"
      className="box-shadow"
    >
      <Dialog open={open} fullWidth>
        <DialogContent>
          {isSubmitSuccessful ? (
            <ThankYou />
          ) : (
            <form onSubmit={handleSubmit(onSubmit as any)}>
              <Grid container direction="column" spacing={2} p={4}>
                <Grid item>
                  <Typography variant="h5">Is this an opportunity for change?</Typography>
                  <Typography>Tell me about your project</Typography>
                </Grid>
                <Grid item>
                  <Controller
                    name="Full Name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        disabled={isSubmitting}
                        fullWidth
                        placeholder="Full Name"
                        helperText={errors["Full Name"]?.message}
                        error={!!errors["Full Name"]}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item>
                  <Controller
                    name="Reply To"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        disabled={isSubmitting}
                        fullWidth
                        placeholder="Reply To"
                        helperText={errors["Reply To"]?.message}
                        error={!!errors["Reply To"]}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item>
                  <Controller
                    name="Description"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        disabled={isSubmitting}
                        multiline
                        rows={3}
                        fullWidth
                        inputProps={{ maxlength: 140 }}
                        placeholder="Description"
                        helperText={errors["Description"]?.message}
                        error={!!errors["Description"]}
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Stack direction="row" component={Grid} item justifyContent="right" spacing={1}>
                  <Button
                    variant="outlined"
                    color="error"
                    size="large"
                    onClick={onToggle}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <LoadingButton
                    loading={isSubmitting}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Send
                  </LoadingButton>
                </Stack>
              </Grid>
            </form>
          )}
        </DialogContent>
      </Dialog>
      <Content direction="column">
        <Typography>Don't wait, let's start cooperation or send a request for a CV.</Typography>
        <Typography>
          To make a request or send an email, use the button below and share with me all the
          information about the job offer.
        </Typography>
        <Button color="secondary" disabled={open} variant="contained" onClick={() => onToggle()}>
          {/* <Button color="secondary" disabled={open} variant="contained" onClick={onToggle}> */}
          Send a request
        </Button>
      </Content>
    </Section>
  )
}
