import{j as n}from"./iframe-EA8DT7as.js";import{$ as j}from"./Form-FoeRnV-_.js";import{G}from"./Grid-BcITu0W_.js";import{G as e}from"./GridItem-CMzf3-2B.js";import{T as r}from"./TextField-ClLQdtel.js";import{S as I}from"./Select-BF6rS_z2.js";import{B as a}from"./Button-BGiximTR.js";import{R as g,a as b}from"./Radio-ZeYOCB28.js";import{C as h}from"./CheckboxGroup-BMYEmC6C.js";import{C as k}from"./Checkbox-DnR53rrL.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DSPJdSsz.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bz-XPoVL.js";import"./useFocusRing-Bdeu5sav.js";import"./index-rmY5WH6Q.js";import"./index-DM-3mYeQ.js";import"./TextFieldBase-Cwzj8604.js";import"./TextField-C5jQY395.js";import"./FieldError-KRQyoKr3.js";import"./Text-j1RY8RT4.js";import"./Text-DOsVq0UB.js";import"./ListKeyboardDelegate-SpoQjLPd.js";import"./SelectionManager-B6HYgKe3.js";import"./useEvent-CUHz-bN7.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Cf-3zIHT.js";import"./useDescription-zx8PgnWr.js";import"./useControlledState-CW6AUFrU.js";import"./Group-zHhrAsxe.js";import"./Input-B7E-8cCU.js";import"./Hidden-BqjGC-QL.js";import"./Button-B7ntt1Cy.js";import"./useLabels-DKGcY1O5.js";import"./useButton-BkY2lVGw.js";import"./useTextField-E16nWnDj.js";import"./useField-DdUJUdOt.js";import"./TextField.module-DjUItNl5.js";import"./Label-CH3BdAaL.js";import"./Dialog-ZrrEj-QM.js";import"./RSPContexts-CshZ4RLx.js";import"./OverlayArrow-D2A5Ir__.js";import"./useResizeObserver-DHCN9eXy.js";import"./Collection-D-nlIY9X.js";import"./index-DNGCppxt.js";import"./Separator-Zbcoamob.js";import"./PressResponder-Dt6d-5io.js";import"./useLocalizedStringFormatter-RzTUoYzJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D3M8JxZ0.js";import"./Dialog-BuM0DS8t.js";import"./useLocalizedStringFormatter-CkUeiUm4.js";import"./x-DZy7ioyX.js";import"./createLucideIcon-DT52Zx7i.js";import"./Heading-BfqdYL2r.js";import"./info-DqBVSB4l.js";import"./Tag-BSSqqxm2.js";import"./ListBox-CH2gG-8K.js";import"./DragAndDrop-DqkLG5pj.js";import"./inertValue-DP5IBvfW.js";import"./useListState-C33azEM8.js";import"./useHighlightSelectionDescription-D9KT_8r4.js";import"./useUpdateEffect-DbcBiskK.js";import"./useHasTabbableChild-CQGcTkpc.js";import"./check-DK7D-jMR.js";import"./ListBoxSection-BNs2IpcN.js";import"./Virtualizer-T5CRH4ru.js";import"./useObserveElement-0umeCAl_.js";import"./chevron-down-C7y-9lSq.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CBcUdAVx.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
