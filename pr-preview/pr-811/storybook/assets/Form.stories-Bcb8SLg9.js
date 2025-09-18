import{j as n}from"./iframe-kX_Y_ddO.js";import{$ as j}from"./Form-DsE5fSff.js";import{G}from"./Grid-ZBa7X1a6.js";import{G as e}from"./GridItem-DPkxcBlW.js";import{T as r}from"./TextField-3cFJgcUM.js";import{S as I}from"./Select-CKIeYBLS.js";import{B as a}from"./Button-Ddod_M5Y.js";import{R as g,a as b}from"./Radio-BbPsMt00.js";import{C as h}from"./CheckboxGroup-D9SsYRzt.js";import{C as k}from"./Checkbox-C1rj2_tX.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DMqEA_0z.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B7cp5Yeu.js";import"./useFocusRing-BuUM8Tgh.js";import"./index-2fTpmrZd.js";import"./index-DqGl8E5Q.js";import"./TextFieldBase-C-y2TBmC.js";import"./TextField-B3WC_Vh6.js";import"./FieldError-CcondGXR.js";import"./Text-z-83bf_m.js";import"./Text-C3LCVaiW.js";import"./ListKeyboardDelegate-COCsGJnu.js";import"./SelectionManager-BjLachJA.js";import"./useEvent-F6BcS6F1.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BudfzHKx.js";import"./useDescription-BtTnaGmk.js";import"./useControlledState-BNBoaflk.js";import"./Group-De_-jyO6.js";import"./Input-BjYtzYCF.js";import"./Hidden-Cw8Z01b-.js";import"./Button-JKq77Mu4.js";import"./useLabels-BvJts_Af.js";import"./useButton-BV_rVB9Q.js";import"./useTextField-B7paem2O.js";import"./useField-D29G6FGN.js";import"./TextField.module-DjUItNl5.js";import"./Label-2C-VRFuw.js";import"./Dialog-Crg16Psf.js";import"./RSPContexts-i5nNPzXq.js";import"./OverlayArrow-DHRqGLHF.js";import"./useResizeObserver-D9-by9BT.js";import"./Collection-CgXLwxsl.js";import"./index-PUQUtsiQ.js";import"./Separator-C6fL_Wnv.js";import"./PressResponder-BCGcPeZZ.js";import"./useLocalizedStringFormatter-LIgw9Mn7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CfBfKFqS.js";import"./Dialog-0maAAIfk.js";import"./useLocalizedStringFormatter-ClGz8ng_.js";import"./x-CXZ77Wkw.js";import"./createLucideIcon-CyreawQq.js";import"./Heading-CUpuUbJJ.js";import"./info-AXfUqfBL.js";import"./Tag-BTZfPGAA.js";import"./ListBox-CnFQyUyR.js";import"./DragAndDrop-k1RciNWL.js";import"./inertValue-iQ5QkuqA.js";import"./useListState-JnEzfhGJ.js";import"./useHighlightSelectionDescription-B3rbxulx.js";import"./useUpdateEffect-DFi2ciis.js";import"./useHasTabbableChild-DaWbGWWb.js";import"./check-Bph2-V_6.js";import"./ListBoxSection-DbTwJGb5.js";import"./Virtualizer-BZKzov1y.js";import"./useObserveElement-BDeQW2Ww.js";import"./chevron-down-Cl5OeftO.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BVQt6OKG.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
