import{j as n}from"./iframe-BtQ_heUV.js";import{$ as j}from"./Form-ONdGb6PB.js";import{G}from"./Grid-C5845XpN.js";import{G as e}from"./GridItem-CbmVwv30.js";import{T as r}from"./TextField-wX0hRSNz.js";import{S as I}from"./Select-TmWxi-qK.js";import{B as a}from"./Button-Bv9I_9lf.js";import{R as g,a as b}from"./Radio-BvVL7n6y.js";import{C as h}from"./CheckboxGroup-BYTkds6_.js";import{C as k}from"./Checkbox-Cmq72h1y.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-qbCzTHeH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D8PPPHeh.js";import"./useFocusRing-B43bonvu.js";import"./index-CsfKgDoe.js";import"./index-CXQFQ7Vi.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-H2wQ2ed1.js";import"./TextField-D2HqwQpl.js";import"./FieldError-BBkkyS-U.js";import"./Text-CN7rIuBY.js";import"./Text-BpNRKNvo.js";import"./RSPContexts-C9H3sUCB.js";import"./Group-CAEEC4Xu.js";import"./Input-BZOfpOHa.js";import"./Hidden-BPIUKtSF.js";import"./Button-C5OfNOWz.js";import"./useLabels-B-AF9fUZ.js";import"./useButton-Bo77m7-M.js";import"./useTextField-BUn71YCc.js";import"./useControlledState-enMtEQDv.js";import"./useField-BA61pi1m.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-JeiZy5sp.js";import"./Dialog-DkT-C26c.js";import"./OverlayArrow-5IZrRFr3.js";import"./useResizeObserver-nhIBpHPJ.js";import"./Collection-CiPajFPx.js";import"./index-BftsokMI.js";import"./Separator-iQWJv5MN.js";import"./SelectionManager-CnOpBJgg.js";import"./useEvent-znRV_IDb.js";import"./scrollIntoView-BkikxFtq.js";import"./SelectionIndicator-DunC-9SB.js";import"./useDescription-BKKnp8Xg.js";import"./ListKeyboardDelegate-DvekUqtR.js";import"./PressResponder-BgqgEAuu.js";import"./useLocalizedStringFormatter-Dglt96Sk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Cn2bPsFX.js";import"./VisuallyHidden-Bg4i5SSJ.js";import"./useLocalizedStringFormatter-BNdhdM8S.js";import"./x-29c2b8WH.js";import"./createLucideIcon-lGI1jU2X.js";import"./Heading-BeUyZvyr.js";import"./info-BpgitpKm.js";import"./Popover-BH5ZEEif.js";import"./Tag-t0RG7qoM.js";import"./ListBox-mVdgIbK9.js";import"./DragAndDrop-DeZBBs2F.js";import"./inertValue-BU_Iw4jA.js";import"./useListState-CsOv8VM7.js";import"./useHighlightSelectionDescription-BBs73mVP.js";import"./useUpdateEffect-DTn9HF_c.js";import"./useHasTabbableChild-DmkIoKZp.js";import"./check-B0GgiR8D.js";import"./ListBoxSection-CxnHGMK0.js";import"./Virtualizer-BA4_er77.js";import"./chevron-down-Ci8CbUrp.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-Bgn4V6Yb.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
