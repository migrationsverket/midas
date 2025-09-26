import{j as n}from"./iframe-sAjp3CAf.js";import{$ as j}from"./Form-D2cFknfR.js";import{G}from"./Grid-DwAKlTj8.js";import{G as e}from"./GridItem-u6URdEUJ.js";import{T as r}from"./TextField-C1dq5z8X.js";import{S as I}from"./Select-CIAmLGWF.js";import{B as a}from"./Button-BckGIegi.js";import{R as g,a as b}from"./Radio-BnhNwk3e.js";import{C as h}from"./CheckboxGroup-FlZk7GzZ.js";import{C as k}from"./Checkbox-v469Bs06.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Dgy0B8z7.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BwItkQlg.js";import"./useFocusRing-lQeypK0z.js";import"./index-DukhzYLr.js";import"./index-DI8BO7vv.js";import"./TextFieldBase-JE3Ouo18.js";import"./TextField-Wc1rsgET.js";import"./FieldError-D2s3oDGV.js";import"./Text-C31ORTqS.js";import"./Text-B5FkXKMR.js";import"./context-KRGxDjrD.js";import"./SelectionManager-TLjw_M8T.js";import"./useEvent-B_0bIgry.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D_pKF77n.js";import"./useDescription-CVC3mpZR.js";import"./useControlledState-DWMDEww7.js";import"./Group-s3A91Clx.js";import"./Input-CYup8fee.js";import"./Hidden-D7wYv5Ug.js";import"./Button-DkCmupU1.js";import"./useLabels-DBgQvP7v.js";import"./useButton-Cv-bLbSa.js";import"./useTextField-g0xgZcDH.js";import"./useField-CCWpU9mL.js";import"./TextField.module-DjUItNl5.js";import"./Label-DUa3xd34.js";import"./Dialog-Dh6OpRK8.js";import"./RSPContexts-CYykCH9T.js";import"./OverlayArrow-DX6eKt7a.js";import"./useResizeObserver-q34Hfrm-.js";import"./Collection-B195l5vC.js";import"./index-DmIPswjV.js";import"./Separator-8UruE0hn.js";import"./PressResponder-hGPYZnEG.js";import"./useLocalizedStringFormatter-B771Hxk8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Cv40xkKP.js";import"./useLocalizedStringFormatter-D2w33rew.js";import"./x-ZiU-uo2R.js";import"./createLucideIcon-blaAuS61.js";import"./Heading-B4ESxrzE.js";import"./info-Dm5rFuV8.js";import"./Popover-ChsTc-P1.js";import"./Tag-pCxXhlOF.js";import"./ListBox-C7l-o5r8.js";import"./DragAndDrop-Dx24I-_2.js";import"./inertValue-CSli_NrU.js";import"./useListState-BHpogo29.js";import"./useHighlightSelectionDescription-B-1rch21.js";import"./useUpdateEffect-BNzG7nkX.js";import"./useHasTabbableChild-BKdarzOs.js";import"./check-ZO_Mba8U.js";import"./ListBoxSection-CnANCdDL.js";import"./Virtualizer-DCxMGhp2.js";import"./useObserveElement-DyPRGcUQ.js";import"./chevron-down-B4_C_iNn.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-B-5Q_dwy.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
