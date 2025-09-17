import{j as n}from"./iframe-DtZPnfcw.js";import{$ as j}from"./Form-Bgw1qhvQ.js";import{G}from"./Grid-CS5bSSl9.js";import{G as e}from"./GridItem-T5fknDeC.js";import{T as r}from"./TextField-CWzFH2Vi.js";import{S as I}from"./Select-DCR0dVqV.js";import{B as a}from"./Button-BLhynGie.js";import{R as g,a as b}from"./Radio-DFcyQQUH.js";import{C as h}from"./CheckboxGroup-BTk6_gUG.js";import{C as k}from"./Checkbox-Dgc2F6Uw.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-HQ9oZss9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BfzKz6vC.js";import"./useFocusRing-BUQi9rHN.js";import"./index-BHEQLcV1.js";import"./index-DcfJgi_S.js";import"./TextFieldBase-BiDsbp2d.js";import"./TextField-BzCsPSAD.js";import"./FieldError-DZmaYsB6.js";import"./Text-85_SK8fl.js";import"./Text-t7CV7aDA.js";import"./ListKeyboardDelegate-Z68QpHO-.js";import"./SelectionManager-B47pbniD.js";import"./useEvent-DiN2JxJK.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BHxYADUv.js";import"./useDescription-QqQF2xVx.js";import"./useControlledState-BRfbSd7x.js";import"./Group-q1ip0Qzn.js";import"./Input-CnWWhkHL.js";import"./Hidden-V1oih-01.js";import"./Button-DdbU51gc.js";import"./useLabels-DnQ9W7k0.js";import"./useButton-CW5tawqg.js";import"./useTextField-Bnep0s8f.js";import"./useField-Lp6Ut80Z.js";import"./TextField.module-DjUItNl5.js";import"./Label-DNg-31XS.js";import"./Dialog-DF8b8zzy.js";import"./RSPContexts-3nFp9u6h.js";import"./OverlayArrow-DErOToC2.js";import"./useResizeObserver-BaeFxw0M.js";import"./Collection-CTTIfV6F.js";import"./index-DrCfyd75.js";import"./Separator-B6K-khqd.js";import"./PressResponder-BswJExk9.js";import"./useLocalizedStringFormatter-taluwpQJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-MkKyFZo6.js";import"./Dialog-BRg8H--T.js";import"./useLocalizedStringFormatter-DZ1x8Yrx.js";import"./x-C1orP_dT.js";import"./createLucideIcon-b0Hjh3jj.js";import"./Heading-COeoO-cw.js";import"./info-D_bv-MOq.js";import"./Tag-Blu9IvDf.js";import"./ListBox-PB34DYuA.js";import"./DragAndDrop-C118kYHh.js";import"./inertValue-QXzNA_sg.js";import"./useListState-CyHh-Ep0.js";import"./useHighlightSelectionDescription-Bf1h9lqw.js";import"./useUpdateEffect-BuPxDxDU.js";import"./useHasTabbableChild-DCY8K7O5.js";import"./check-BqyXprfq.js";import"./ListBoxSection-BLBrusEZ.js";import"./Virtualizer-DNJoENQo.js";import"./useObserveElement-B1oC4oRH.js";import"./chevron-down-DE-MRqz0.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CZwH7GZ_.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
