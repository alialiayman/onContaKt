import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from 'formik';
import React from 'react';
import CoreImage from './CoreImage';

const CoreField = ({ field, mode, onChange, onBlur, value }) => {

    const handleUrlChanged = (newUrl) => {

    }

    return (
        <React.Fragment>
            {((['text', 'tel', 'email'].includes(field.type)) &&
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        autoFocus={field.autoFocus}
                        disabled={mode === 2 || (field.isReadOnly)}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        autoComplete="off"
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}
            {((['textarea'].includes(field.type)) &&
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        multiline
                        rowsMax={4}
                        autoFocus={field.autoFocus}
                        disabled={mode === 2 || (field.isReadOnly)}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}

            {((['number'].includes(field.type)) &&
                <Grid item xs={4}>
                    <TextField
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        autoFocus={field.autoFocus}
                        disabled={mode === 2 || (field.isReadOnly)}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}

            {((['date'].includes(field.type)) &&
                <Grid item xs={4}>
                    <TextField
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        autoFocus={field.autoFocus}
                        disabled={mode === 2 || (field.isReadOnly)}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}

            {((['checkbox'].includes(field.type)) &&
                <Grid item xs={4}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={value}
                                onChange={onChange}
                                name={field.name}
                                color="primary"
                                disabled={mode === 2 || (field.isReadOnly)}
                            />
                        }
                        label={field.label}
                    />
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}

            {((['file'].includes(field.type)) &&
                <Grid item xs={4}>
                    <CoreImage
                        name={field.name}
                        disabled={mode === 2 || (field.isReadOnly)}
                        initialUrl={value}
                        onUrlChanged={handleUrlChanged}
                    />
                    <div>{value} {JSON.stringify(value)}</div>
                    <ErrorMessage name={field.name} component="div" />
                </Grid>)}
        </React.Fragment>

    )
}

export default CoreField;