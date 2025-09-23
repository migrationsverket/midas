import{j as n}from"./iframe-KJDLp_0m.js";import{$ as j}from"./Form-CGMMoA4j.js";import{G}from"./Grid-Czf5POH6.js";import{G as e}from"./GridItem-D9AgJckx.js";import{T as r}from"./TextField-BluWwNoM.js";import{S as I}from"./Select-BZYPYh1n.js";import{B as a}from"./Button-CB915UM1.js";import{R as g,a as b}from"./Radio-LXmaI2TJ.js";import{C as h}from"./CheckboxGroup-DIRrbRja.js";import{C as k}from"./Checkbox-yfeYJFPi.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CvzFG7zr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-rJTAULCz.js";import"./useFocusRing-BPsypYMS.js";import"./index-K8rlEHaU.js";import"./index-C9CguOj_.js";import"./TextFieldBase-Q5hkPV9L.js";import"./TextField-bNG-njyN.js";import"./FieldError-ioEPFLmC.js";import"./Text-DPwL8vhz.js";import"./Text-UBe5lcym.js";import"./ListKeyboardDelegate-fljvkVIu.js";import"./SelectionManager-dRTwsFVG.js";import"./useEvent-CpLcXrqi.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BcIvWmSs.js";import"./useDescription-BifXjiAZ.js";import"./useControlledState-DJmAUmTR.js";import"./Group-bT_jIFhq.js";import"./Input-BrAcyzYu.js";import"./Hidden-DWeZ5oJq.js";import"./Button-DT4olQqQ.js";import"./useLabels-D7zurx9v.js";import"./useButton-C4ewyi1m.js";import"./useTextField-DAUB8H6t.js";import"./useField-D3UHXkId.js";import"./TextField.module-DjUItNl5.js";import"./Label-J2hcChdk.js";import"./Dialog-cP-R1IIP.js";import"./RSPContexts-CuT5Ugif.js";import"./OverlayArrow-CiphyqW7.js";import"./useResizeObserver-CPFgDpc8.js";import"./Collection-D3tqlWxK.js";import"./index-DXUssJdq.js";import"./Separator-A0tYgwMs.js";import"./PressResponder-f7w67lvB.js";import"./useLocalizedStringFormatter-CIR2fVNC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DoO9jzw4.js";import"./Dialog-Bp40iXqu.js";import"./useLocalizedStringFormatter-Dkb85PDL.js";import"./x-UN6dUsR5.js";import"./createLucideIcon-CV9z2eLr.js";import"./Heading-ERHVarsj.js";import"./info-D5nSr8Nd.js";import"./Tag-CqytFYj6.js";import"./ListBox-CLHEVhdS.js";import"./DragAndDrop-C8GY1ln9.js";import"./inertValue-DcmhgI7l.js";import"./useListState-CZlxl9fm.js";import"./useHighlightSelectionDescription-D-EOf8wZ.js";import"./useUpdateEffect-CuQxxpNn.js";import"./useHasTabbableChild-L31mcIHK.js";import"./check-Vjmf43AI.js";import"./ListBoxSection-BkbTwdsM.js";import"./Virtualizer-Ch4Rc3Xs.js";import"./useObserveElement-DCgAbgjO.js";import"./chevron-down-DAz3PwPk.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-AqyLLEIz.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
