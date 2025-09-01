import{j as n}from"./iframe-5BetUtcV.js";import{$ as j}from"./Form-DZQTtCg-.js";import{G}from"./Grid-Z_pLykQR.js";import{G as e}from"./GridItem-BO50w8lM.js";import{T as r}from"./TextField-DQEpX2UR.js";import{S as I}from"./Select-CGSgt06-.js";import{B as a}from"./Button-BiRN1gd-.js";import{R as g,a as b}from"./Radio-hDauPC1E.js";import{C as h}from"./CheckboxGroup-CroWwlab.js";import{C as k}from"./Checkbox-BHwF54ye.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CoA_VPnw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B7TkPx6B.js";import"./useFocusRing-VggDcjf3.js";import"./index-lQmPnj_E.js";import"./index-DvrWc4Vr.js";import"./TextFieldBase-BCYxSUmH.js";import"./TextField-DBWCGPC3.js";import"./FieldError-CQAVqLbJ.js";import"./Text-BHUVVTHZ.js";import"./Text-ClwN0zKV.js";import"./Input-CYMRddCf.js";import"./Hidden-BF7xvCVL.js";import"./Button-CWF7mv71.js";import"./useLabels-DbY8zMOO.js";import"./useButton-CtkpYNzL.js";import"./useTextField-D9Aqh1Vh.js";import"./useControlledState-C0PP9f13.js";import"./useField-DPjq8RHS.js";import"./TextField.module-BrIGiDQC.js";import"./Label-DLIFo8oq.js";import"./Dialog-0ZzQwi1c.js";import"./RSPContexts-BQULY6g3.js";import"./OverlayArrow-CeMIx4W9.js";import"./useResizeObserver-DaBPrym7.js";import"./Collection-DBS-_PEV.js";import"./index-DIRhbqUS.js";import"./Separator-DJVMOb-M.js";import"./SelectionManager-BT7TWSrC.js";import"./useEvent-BLzgi9sU.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D4LGXEog.js";import"./useDescription-CReAlymS.js";import"./ListKeyboardDelegate-DbtfxGvo.js";import"./PressResponder-aTQ0ukCy.js";import"./useLocalizedStringFormatter-HDZb6t0o.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Cgp1Cvag.js";import"./Dialog-DGkokF3O.js";import"./useLocalizedStringFormatter-BEnKS9FC.js";import"./x-BkaBrGjB.js";import"./createLucideIcon-BCYUxSlg.js";import"./Heading-jf2QqhZJ.js";import"./info-BCD6VwvK.js";import"./Tag-DLh6vhfu.js";import"./ListBox-DBr6ecM-.js";import"./DragAndDrop-CC-2F5ez.js";import"./inertValue-DwrsRQP3.js";import"./useListState-BvHVnvuk.js";import"./useHighlightSelectionDescription-Bs5DQLz3.js";import"./useUpdateEffect-CqXis3IH.js";import"./useHasTabbableChild-DPWgGBgL.js";import"./check-Dji4VlZ_.js";import"./ListBoxSection-D1XtfjEK.js";import"./Virtualizer-CJs-NRJ2.js";import"./useObserveElement-Db6oCn9j.js";import"./chevron-down-wqpgd2Sf.js";import"./Button.module-CF2bVDCq.js";import"./Group-roytp3fX.js";import"./useToggleState-rVNGB6TD.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
