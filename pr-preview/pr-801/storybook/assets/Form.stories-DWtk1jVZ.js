import{j as n}from"./iframe-Dydj_fc_.js";import{$ as j}from"./Form-Ci_0xvNK.js";import{G}from"./Grid-XHtahkMr.js";import{G as e}from"./GridItem-n1C7lz39.js";import{T as r}from"./TextField-_fpt18oW.js";import{S as I}from"./Select-RXLu32Oj.js";import{B as a}from"./Button-K4exUzmh.js";import{R as g,a as b}from"./Radio-CCwpwwhA.js";import{C as h}from"./CheckboxGroup-CXkh-gO6.js";import{C as k}from"./Checkbox-BBuQxC6k.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BJp_gTQ0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-X-HNhHxQ.js";import"./useFocusRing-Cl-cgjAC.js";import"./index-CvKS-P4J.js";import"./index-D2SXu3hh.js";import"./TextFieldBase-DLpgDCjq.js";import"./TextField-YbWqyBXq.js";import"./FieldError-OANImtk8.js";import"./Text-Bq4JVDwh.js";import"./Text-C8hlxKib.js";import"./ListKeyboardDelegate-DRdGLf-H.js";import"./SelectionManager-DWYGYrqc.js";import"./useEvent-BDJw71Ox.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DJ0SCkPH.js";import"./useDescription-cV6Ky1A0.js";import"./useControlledState-DuAZjhOM.js";import"./Group-Znlpqgsq.js";import"./Input-CfTOJhna.js";import"./Hidden-DMdBx9YZ.js";import"./Button-Bn-OY-1H.js";import"./useLabels-DjQ2Wpfm.js";import"./useButton-B9qGDT7J.js";import"./useTextField-_7_RgqgM.js";import"./useField-Dgw663X7.js";import"./TextField.module-DjUItNl5.js";import"./Label-5hldzhJV.js";import"./Dialog-Dyaf4ZpW.js";import"./RSPContexts-WbSYqF_8.js";import"./OverlayArrow-D0wVGk7Y.js";import"./useResizeObserver-BT0wEYja.js";import"./Collection-BxeNnFpU.js";import"./index-6k3MK4sp.js";import"./Separator-CL48PsEC.js";import"./PressResponder-BMk2qJGb.js";import"./useLocalizedStringFormatter-BFb7jt9V.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C12WyjZ4.js";import"./Dialog-Cb2buJQn.js";import"./useLocalizedStringFormatter-DwqdzKCw.js";import"./x-EH5wECIf.js";import"./createLucideIcon-BXRuxe2c.js";import"./Heading-DxxQES04.js";import"./info-CMUHEFhO.js";import"./Tag-CTNLyqH_.js";import"./ListBox-djGFiSqa.js";import"./DragAndDrop-BNK5GNtN.js";import"./inertValue-B3WOaT0J.js";import"./useListState-BYKSXgXx.js";import"./useHighlightSelectionDescription-Dc9gQTIe.js";import"./useUpdateEffect-D34Min38.js";import"./useHasTabbableChild-DwXReXyo.js";import"./check-sE78idhf.js";import"./ListBoxSection-C3AmRHdj.js";import"./Virtualizer-Dg52o1Cc.js";import"./useObserveElement-BkclKEAa.js";import"./chevron-down-C2uNk6R5.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D0ZapR5s.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
