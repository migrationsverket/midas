import{j as n}from"./iframe-y3zUiO1J.js";import{$ as j}from"./Form-C9OW_fOx.js";import{G}from"./Grid-DTesBQ08.js";import{G as e}from"./GridItem-DDP0qmc4.js";import{T as r}from"./TextField-B2fPcTJU.js";import{S as I}from"./Select-C_esdHKe.js";import{B as a}from"./Button-BDrqJzdG.js";import{R as g,a as b}from"./Radio-1uI2cf1n.js";import{C as h}from"./CheckboxGroup-B6z7sXp_.js";import{C as k}from"./Checkbox-CoqIOGMK.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DgfIEZ2l.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-PO_CdwIB.js";import"./useFocusRing-CCdMQ_TW.js";import"./index-CT42ImiZ.js";import"./index-Dli5INss.js";import"./TextFieldBase-DuWvFvGJ.js";import"./TextField-CxmLlyLj.js";import"./FieldError-2gwiE8FS.js";import"./Text-B2aZuF7F.js";import"./Text-D3c_H73L.js";import"./Input-CTNB8dNx.js";import"./Hidden-LIVvUHEl.js";import"./Button-CzVrwDkD.js";import"./useLabels-BPMr3Cme.js";import"./useButton-WDu1xsqv.js";import"./useTextField-BhfZJi76.js";import"./useControlledState-BMSmXNYe.js";import"./useField-BbATYL60.js";import"./TextField.module-D5Mcm-cg.js";import"./Label-D50A2xp0.js";import"./Dialog-jykJmB8a.js";import"./RSPContexts-CN-cgumh.js";import"./OverlayArrow-DfG-W09j.js";import"./useResizeObserver-CcvnX-FU.js";import"./Collection-DhfTE3E9.js";import"./index-oR09zEQD.js";import"./Separator-DPfAiPIW.js";import"./SelectionManager-D6gO8XHw.js";import"./useEvent-CpudPYOj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Ybh16f8F.js";import"./useDescription-BnySdmCV.js";import"./ListKeyboardDelegate-DVZN-xzJ.js";import"./PressResponder-DIkBwjt6.js";import"./useLocalizedStringFormatter-ok5SO70Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CbO0bNHC.js";import"./Dialog-CCXtrWxX.js";import"./useLocalizedStringFormatter-BAtcx0ZI.js";import"./x-BJvE-ZNY.js";import"./createLucideIcon-DqdaTGZ4.js";import"./Heading-4TV7P-nQ.js";import"./info-B0u-oiiz.js";import"./Tag-DliE0vhI.js";import"./ListBox-BMKwW7Zv.js";import"./DragAndDrop-ISs4gArs.js";import"./inertValue-Cbfo9opA.js";import"./useListState-D6x91dYx.js";import"./useHighlightSelectionDescription-BdDP1opK.js";import"./useUpdateEffect-DvalZOKq.js";import"./useHasTabbableChild-BtkVAq4Z.js";import"./check-DGAKGjZI.js";import"./ListBoxSection-z3M_5PTO.js";import"./Virtualizer-DYB6AEzg.js";import"./useObserveElement-DFEZtToA.js";import"./chevron-down-CKSedvOX.js";import"./Button.module-CF2bVDCq.js";import"./Group-VcPXw0PH.js";import"./useToggleState-CnNyDtjl.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
