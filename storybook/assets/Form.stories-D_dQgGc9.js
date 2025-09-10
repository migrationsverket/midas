import{j as n}from"./iframe-Bdqu9UMr.js";import{$ as j}from"./Form-72Js02qM.js";import{G}from"./Grid-DscGGnTK.js";import{G as e}from"./GridItem-CLfohuhO.js";import{T as r}from"./TextField-C17Ox7JT.js";import{S as I}from"./Select-CjmGTHf7.js";import{B as a}from"./Button-LeSFOBTO.js";import{R as g,a as b}from"./Radio-CC8zFIeX.js";import{C as h}from"./CheckboxGroup-CjRGNqii.js";import{C as k}from"./Checkbox-DWMoPVp_.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DayZYmnU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-NyX3SVY8.js";import"./useFocusRing-CeP4urbj.js";import"./index-Dz9ewm1I.js";import"./index-bX8HjCLa.js";import"./TextFieldBase-YXnbwz5N.js";import"./TextField-1kx-aGR8.js";import"./FieldError-jmdxtApF.js";import"./Text-DZnGrw0C.js";import"./Text-JAc5KjLH.js";import"./ListKeyboardDelegate-DF250x5Z.js";import"./SelectionManager-BPNTSnr9.js";import"./useEvent-Bp7HlmXv.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-1VMD3Xw2.js";import"./useDescription-CcgBP6fW.js";import"./useControlledState-Ebn1sWlW.js";import"./Group-D0BNH_Id.js";import"./Input-tdAqnNwJ.js";import"./Hidden-EA5FVCUF.js";import"./Button-DYBTZaOc.js";import"./useLabels-B0SMKdRg.js";import"./useButton-CHniXGgb.js";import"./useTextField-DMB7uuI8.js";import"./useField-BGlqVa_B.js";import"./TextField.module-8oYDuXgF.js";import"./Label-DEmj66DY.js";import"./Dialog-Cu1I7Jqh.js";import"./RSPContexts-DO8RobUg.js";import"./OverlayArrow-CFM7Vqi5.js";import"./useResizeObserver-DgNdrgki.js";import"./Collection-DAvYrOBZ.js";import"./index-BchuxNxG.js";import"./Separator-CHPHGSCz.js";import"./PressResponder-CW4RVC8g.js";import"./useLocalizedStringFormatter-C2BIwcwa.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DqV297Y2.js";import"./Dialog-DU35f-If.js";import"./useLocalizedStringFormatter-1HLAD97H.js";import"./x-DRfrQVMf.js";import"./createLucideIcon-DTfLWIJy.js";import"./Heading-CteVHok4.js";import"./info-wdx4bgOj.js";import"./Tag-BO-psAx9.js";import"./ListBox-CQftPHik.js";import"./DragAndDrop-CHDSfqq-.js";import"./inertValue-BO-thFgw.js";import"./useListState-BG3TsYkt.js";import"./useHighlightSelectionDescription-CwkhRNZn.js";import"./useUpdateEffect-j5cnkVPd.js";import"./useHasTabbableChild-fpMoBT1h.js";import"./check-BKZ5HmzC.js";import"./ListBoxSection-BXLJ3Ib9.js";import"./Virtualizer-slEoy2_6.js";import"./useObserveElement-BWl1cqIL.js";import"./chevron-down-DIRui6Wc.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-CsWkwOPu.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
