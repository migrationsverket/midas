import{j as n}from"./iframe-4kbjWhdY.js";import{$ as j}from"./Form-CHfjIbYR.js";import{G}from"./Grid-CUF3U49m.js";import{G as e}from"./GridItem-Dhw2Pr-z.js";import{T as r}from"./TextField-DPVstXOx.js";import{S as I}from"./Select-Bj0P7fkx.js";import{B as a}from"./Button-pSdafJ0d.js";import{R as g,a as b}from"./Radio-D3zdxbNF.js";import{C as h}from"./CheckboxGroup-22d5NdSs.js";import{C as k}from"./Checkbox-8vALFeus.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DEjkxMCY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-2-O81Hmw.js";import"./useFocusRing-DNLoxoKj.js";import"./index-BO_u2b3Q.js";import"./index-m7eO5rAx.js";import"./TextFieldBase-BcYLicyS.js";import"./TextField-COD8RVxK.js";import"./FieldError-BBz5WHOs.js";import"./Text-uHHGtTze.js";import"./Text-LO6ADEhY.js";import"./Input-DBOYCS2d.js";import"./Hidden-CdE63u58.js";import"./Button-BCE0vaA_.js";import"./useLabels-CUCoNvtn.js";import"./useButton-3HKmGh7y.js";import"./useTextField-Cr1DGHK_.js";import"./useControlledState-Cv5IFUWm.js";import"./useField-7j9CF2gX.js";import"./TextField.module-C33Y04O9.js";import"./Label-BMdfmWDi.js";import"./Dialog-BwT8TAWc.js";import"./RSPContexts-DyXBb6bR.js";import"./OverlayArrow-Bj32tEdM.js";import"./useResizeObserver-D-QIPcgG.js";import"./Collection-DthmVklz.js";import"./index-BCVchfYO.js";import"./Separator-CYJv4MM6.js";import"./SelectionManager-CuBcwmf1.js";import"./useEvent-CTac32wQ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-QL5ehmCL.js";import"./useDescription-DA7GmP2S.js";import"./ListKeyboardDelegate-BTOc5ngV.js";import"./PressResponder-wSYrU_8m.js";import"./useLocalizedStringFormatter-CXyAmtv9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CzMB5XuL.js";import"./Dialog-BON1DJ7-.js";import"./useLocalizedStringFormatter-llutoThz.js";import"./x-7wAAahvq.js";import"./createLucideIcon-Cv9r8c7H.js";import"./Heading-C_qbU-Bm.js";import"./info-Bqd1Vmkm.js";import"./Tag-BB9WEKmC.js";import"./ListBox-BUbLEjoj.js";import"./DragAndDrop-Be-6rfgQ.js";import"./inertValue-SkVlqi9-.js";import"./useListState-lBzizMUM.js";import"./useHighlightSelectionDescription-BgeGqFsk.js";import"./useUpdateEffect-BZAAHnK0.js";import"./useHasTabbableChild-CZOZgw4d.js";import"./check-CojJKRA-.js";import"./ListBoxSection-DOaYo393.js";import"./Virtualizer-DgrbgtAR.js";import"./useObserveElement-_IG2gder.js";import"./chevron-down-RU9fFxr-.js";import"./Button.module-DKVuWS4g.js";import"./Group-BEio7bF_.js";import"./useToggleState-DGDB4R_6.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
