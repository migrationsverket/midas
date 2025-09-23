import{j as n}from"./iframe-IGdG228X.js";import{$ as j}from"./Form-Bvhjo3fe.js";import{G}from"./Grid-C2LDS9c8.js";import{G as e}from"./GridItem-BO2lZlz5.js";import{T as r}from"./TextField-TM6kDbyn.js";import{S as I}from"./Select-DSP_QJPQ.js";import{B as a}from"./Button-Ct9cv0Xs.js";import{R as g,a as b}from"./Radio-BQ3q1yf7.js";import{C as h}from"./CheckboxGroup-CFrv7w05.js";import{C as k}from"./Checkbox-nrgJShDH.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DSJJDvIy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DH2L-oAJ.js";import"./useFocusRing-DOMCfIHN.js";import"./index-DiDkhsVB.js";import"./index-Ba_FZY4d.js";import"./TextFieldBase-DLZD3fTX.js";import"./TextField-CLRJBvln.js";import"./FieldError-CxBK6w6J.js";import"./Text-u7mfl6S-.js";import"./Text-CGiKCehH.js";import"./ListKeyboardDelegate-CBkFgjWl.js";import"./SelectionManager-C5zEdJr0.js";import"./useEvent-Ct2dZahR.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DDrQ6azI.js";import"./useDescription-YfrfWKOX.js";import"./useControlledState-BRuFmj6y.js";import"./Group-BUigEnEr.js";import"./Input-zJg6iP-g.js";import"./Hidden-DEpiM9Th.js";import"./Button-C1xVWIxn.js";import"./useLabels-BhhiaI26.js";import"./useButton-D-TQlYJ5.js";import"./useTextField-7-me9zyJ.js";import"./useField-Dxq7kqy_.js";import"./TextField.module-DjUItNl5.js";import"./Label-ZTyAkdWr.js";import"./Dialog-CZVLk49O.js";import"./RSPContexts-UjWZBSDR.js";import"./OverlayArrow-DUvOrlx1.js";import"./useResizeObserver-CwAhwr9T.js";import"./Collection-BvTDcZ_s.js";import"./index-BZuCjxk9.js";import"./Separator-BZFMuQbo.js";import"./PressResponder-CxKa3tRu.js";import"./useLocalizedStringFormatter-BjVI0MCZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CxDUnjyT.js";import"./Dialog-CgwUJgb_.js";import"./useLocalizedStringFormatter-DDMCx27W.js";import"./x-et0ZkHQH.js";import"./createLucideIcon-CxV_sK90.js";import"./Heading-BkEEVoR9.js";import"./info-Bdjh4b42.js";import"./Tag-Ty3zK8Fw.js";import"./ListBox-CbdRseZB.js";import"./DragAndDrop-C4PujY2c.js";import"./inertValue-IgLvr_kK.js";import"./useListState-CLo8R_8p.js";import"./useHighlightSelectionDescription-CpdnnXYY.js";import"./useUpdateEffect-TOVGVHai.js";import"./useHasTabbableChild-C1dzIlTV.js";import"./check-BkTfZCST.js";import"./ListBoxSection-B7Y9PiK-.js";import"./Virtualizer-BRbiY1Bf.js";import"./useObserveElement-Dl-Q6dOF.js";import"./chevron-down-YYdNd5C0.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-qHDyXQed.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
