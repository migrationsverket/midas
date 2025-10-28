import{j as n}from"./iframe-CV6D69rN.js";import{$ as j}from"./Form-wsEfk7ZQ.js";import{G}from"./Grid-G15z_UcM.js";import{G as e}from"./GridItem-BgkpiB7N.js";import{T as r}from"./TextField-D0NVtViR.js";import{S as I}from"./Select-BynebWX6.js";import{B as a}from"./Button-Dizi4_G8.js";import{R as g,a as b}from"./Radio-CHRmWhxa.js";import{C as h}from"./CheckboxGroup-Cak44pEw.js";import{C as k}from"./Checkbox-CznPvrSy.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CKHByqgZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-5evc1-jd.js";import"./useFocusRing-CCiInLav.js";import"./index-OOrruJrH.js";import"./index-BMI-bX1r.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-VSY6vh1j.js";import"./FieldError-B-Ge7Uov.js";import"./Text-D1Ngmv5r.js";import"./Text-BlqYH_LB.js";import"./RSPContexts-D3NmVjZf.js";import"./Group-t4zLy03G.js";import"./Input-Clx3RTB7.js";import"./Hidden-BoxzXb92.js";import"./Button-CaHPonWk.js";import"./useLabels-CgeldylQ.js";import"./useButton-D0HcQPMI.js";import"./useTextField-ChZlwZNZ.js";import"./useControlledState-Cy4rarAg.js";import"./useField-CV8mr7BQ.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-D2txPkt7.js";import"./Dialog-BqWt81Sv.js";import"./OverlayArrow-t3Vif8VJ.js";import"./useResizeObserver-BKkvTohJ.js";import"./Collection-BIL80Rt6.js";import"./index-hjA5xk3Q.js";import"./Separator-BfRkh68f.js";import"./SelectionManager-4G46F4LF.js";import"./useEvent-BT5JGBkm.js";import"./scrollIntoView-B6XuVU3G.js";import"./SelectionIndicator-DXDwfq4F.js";import"./useDescription-CahuEqLm.js";import"./ListKeyboardDelegate-Bg6czyu9.js";import"./PressResponder-SKDpqgnR.js";import"./useLocalizedStringFormatter-B_kJP8rr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-fjDQJjcB.js";import"./VisuallyHidden-CnpDd7XO.js";import"./useLocalizedStringFormatter-j2CqgG_g.js";import"./x-CKg5TItV.js";import"./createLucideIcon-2hRCEgZR.js";import"./Heading-BUcATZCi.js";import"./info-fxB4821l.js";import"./Popover-CsHwNCON.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D1glRxkm.js";import"./DragAndDrop-DJO-Yq_R.js";import"./inertValue-BHkNhMhS.js";import"./useListState-C8ZuTScU.js";import"./Tag-Bjb46iV0.js";import"./useHighlightSelectionDescription-S7I7IEod.js";import"./useUpdateEffect-BdbQzaLV.js";import"./useHasTabbableChild-CACr0TIL.js";import"./chevron-down-Cy_TFEGq.js";import"./ListBox-BtXsOOhn.js";import"./Virtualizer-DBi-uDoy.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-EH6fHcJ8.js";const Pn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const $n=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,$n as __namedExportsOrder,Pn as default};
