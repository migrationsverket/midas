import{j as n}from"./iframe-CZ5bDSaQ.js";import{$ as j}from"./Form-dRGPT7Dh.js";import{G}from"./Grid-CzlFGNQL.js";import{G as e}from"./GridItem-DvYVR5df.js";import{T as r}from"./TextField-_IDro3h7.js";import{S as I}from"./Select-CM9pB03K.js";import{B as a}from"./Button-Cu5-wphl.js";import{R as g,a as b}from"./Radio-VGrKNrej.js";import{C as h}from"./CheckboxGroup-DO9-i1bu.js";import{C as k}from"./Checkbox-Cd88SsmO.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Czfai--t.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cy6xzzfL.js";import"./useFocusRing-DYpOuvDT.js";import"./index-BMAPYNS6.js";import"./index-CTfyq5ur.js";import"./TextFieldBase-DoHxrvaI.js";import"./TextField-D3smZ_70.js";import"./FieldError-BvZWulgp.js";import"./Text-D8SMh6Gg.js";import"./Text-CO9uVbun.js";import"./ListKeyboardDelegate-BP5UPWIr.js";import"./SelectionManager-4ZrKzacc.js";import"./useEvent-DkYxwum_.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-j8SDO1ae.js";import"./useDescription-BH9iGjS3.js";import"./useControlledState-C_zKl2Ib.js";import"./Group-B9Vo6PmE.js";import"./Input-DMdKIZt1.js";import"./Hidden-DNuoOSE0.js";import"./Button-D2X5DXFX.js";import"./useLabels-CaABZ7Bt.js";import"./useButton-BEPvHTVx.js";import"./useTextField-BXvveDrP.js";import"./useField-BxT03_a1.js";import"./TextField.module-8oYDuXgF.js";import"./Label-DYcWJNfJ.js";import"./Dialog-DnH68Iji.js";import"./RSPContexts-rXxsHOKq.js";import"./OverlayArrow-CwlWCH_e.js";import"./useResizeObserver-69e0zEaF.js";import"./Collection-CCAIWdtv.js";import"./index-Dl5uzFUP.js";import"./Separator-k4R3X4tJ.js";import"./PressResponder-BMDpPz96.js";import"./useLocalizedStringFormatter-CempFJC2.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CVbDFW5g.js";import"./Dialog-BYkSrSyD.js";import"./useLocalizedStringFormatter-BIXzulOX.js";import"./x-BtpuSG-t.js";import"./createLucideIcon-BC5XrflQ.js";import"./Heading-BLtsnaOQ.js";import"./info-Cw8VIBXr.js";import"./Tag-CoNDDA9U.js";import"./ListBox-Bt0CjntY.js";import"./DragAndDrop-BGmvRjko.js";import"./inertValue-C7QBUaMx.js";import"./useListState-Bfjf_sRj.js";import"./useHighlightSelectionDescription-C_o9lnYK.js";import"./useUpdateEffect-B0ecAxuy.js";import"./useHasTabbableChild-CNS1b7kx.js";import"./check-BTI3sQyb.js";import"./ListBoxSection-BISoBsQj.js";import"./Virtualizer-QWd6cTlg.js";import"./useObserveElement-Bt1cmUUz.js";import"./chevron-down-CwXK7L8Y.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-BBakcilO.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
