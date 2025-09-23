import{j as n}from"./iframe-ByXITAR6.js";import{$ as j}from"./Form-Odks99pQ.js";import{G}from"./Grid-lfMv8Ep2.js";import{G as e}from"./GridItem-C2jnpBeN.js";import{T as r}from"./TextField-D5oCr43C.js";import{S as I}from"./Select-Dt8FFIqB.js";import{B as a}from"./Button-BiYW4yQU.js";import{R as g,a as b}from"./Radio-Cxb7dkZs.js";import{C as h}from"./CheckboxGroup-BmHtO3YO.js";import{C as k}from"./Checkbox-DUwsgMDr.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D1Iz_sGU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CO_HWDpT.js";import"./useFocusRing-DCaf1N-5.js";import"./index-D2QPoSuO.js";import"./index-YEkjdco4.js";import"./TextFieldBase-CXO0sdsK.js";import"./TextField-Dh41rsmw.js";import"./FieldError-Dw9j5pkv.js";import"./Text-VL-RFPJB.js";import"./Text-CvuJORyg.js";import"./ListKeyboardDelegate-vP7aWkW5.js";import"./SelectionManager-DXJRtYjZ.js";import"./useEvent-BXBhk7Ms.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CXmZYlpT.js";import"./useDescription-DynR-RZu.js";import"./useControlledState-CMNN2Kd9.js";import"./Group-BGcTm_JH.js";import"./Input-C_KGkX4B.js";import"./Hidden-DK38GnWF.js";import"./Button-CB59GHT1.js";import"./useLabels-Bx28a0pw.js";import"./useButton-DuW5PgQG.js";import"./useTextField-CcnoRVxU.js";import"./useField-DJVlL9WR.js";import"./TextField.module-DjUItNl5.js";import"./Label-az2GfetX.js";import"./Dialog-B2oMUqT_.js";import"./RSPContexts-DZftDMzD.js";import"./OverlayArrow-BznwlJ5S.js";import"./useResizeObserver-DBmSayUL.js";import"./Collection-Dr_kZumB.js";import"./index-BARHehnK.js";import"./Separator-4dPx9U-W.js";import"./PressResponder-BgYOXIOy.js";import"./useLocalizedStringFormatter-CdCZ10QW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BZykfq10.js";import"./Dialog-VpWgWeO7.js";import"./useLocalizedStringFormatter-BOhVU_Co.js";import"./x-DZt6mJWH.js";import"./createLucideIcon-N0rfLJ1l.js";import"./Heading-DSGxuSlB.js";import"./info-CZW0TVSf.js";import"./Tag-FRtaeroL.js";import"./ListBox-PSL0FEeD.js";import"./DragAndDrop-Ds8WYoLK.js";import"./inertValue-CbA_6_jk.js";import"./useListState-D1QEIMSv.js";import"./useHighlightSelectionDescription-CcaUa1__.js";import"./useUpdateEffect-yYOpjBfD.js";import"./useHasTabbableChild-PklB8_N-.js";import"./check-DpbRaqnk.js";import"./ListBoxSection-CfEDCHon.js";import"./Virtualizer-bzojV1hr.js";import"./useObserveElement-BX8N2fC6.js";import"./chevron-down-7LYZbSHC.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-B8cN-lGP.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
