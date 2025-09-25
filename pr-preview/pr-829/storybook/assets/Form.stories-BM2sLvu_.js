import{j as n}from"./iframe-DoEm8jOK.js";import{$ as j}from"./Form-QmU1Z7aR.js";import{G}from"./Grid-DAZDNiqy.js";import{G as e}from"./GridItem-EEwwikPK.js";import{T as r}from"./TextField-D0nPKR97.js";import{S as I}from"./Select-xv_MBB-A.js";import{B as a}from"./Button-Cj5-N1s4.js";import{R as g,a as b}from"./Radio-DLpgpyvJ.js";import{C as h}from"./CheckboxGroup-X1rm4OWQ.js";import{C as k}from"./Checkbox-9L54XUKM.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CBBL1yxz.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DTG235gF.js";import"./useFocusRing-D76VYtD6.js";import"./index-DMJ9tBuT.js";import"./index-C4s_PXg9.js";import"./TextFieldBase-CLdgDdfJ.js";import"./TextField-Bfimjmod.js";import"./FieldError-BN2C0wgX.js";import"./Text-B9Snu3HI.js";import"./Text-DoXzwrTF.js";import"./ListKeyboardDelegate-3OKEOtnS.js";import"./SelectionManager-CfpEtskZ.js";import"./useEvent-BpenKleG.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DMHgaQJH.js";import"./useDescription-DzeLSQN-.js";import"./useControlledState-BNJvzmwi.js";import"./Group-CFRgsPM5.js";import"./Input-DRp2x3Jt.js";import"./Hidden-UMpvD0EO.js";import"./Button-BuoyjQKt.js";import"./useLabels-Cd3X_Ale.js";import"./useButton-BlgZJUnf.js";import"./useTextField-CQw-ESsx.js";import"./useField-d2Ru0eqd.js";import"./TextField.module-DjUItNl5.js";import"./Label-DaV778zy.js";import"./Dialog-BQgXfI0Q.js";import"./RSPContexts-EOXGmgCC.js";import"./OverlayArrow-Bo5YSuyW.js";import"./useResizeObserver-CjVgkUGK.js";import"./Collection-BdA7v9ZY.js";import"./index-qQhZJVFU.js";import"./Separator-BWaW984y.js";import"./PressResponder-Bd5HUdvN.js";import"./useLocalizedStringFormatter-B9EjVLIH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DTaoXVVL.js";import"./Dialog-DCubYlRP.js";import"./useLocalizedStringFormatter-sUG-QOwr.js";import"./x-DAhXhk8F.js";import"./createLucideIcon-Bt1qQWgl.js";import"./Heading-CwOskuSc.js";import"./info-COfgodNL.js";import"./Tag-FJXlBsLt.js";import"./ListBox-CylVf3Kv.js";import"./DragAndDrop-B3PhYWzx.js";import"./inertValue-CYLkmPrr.js";import"./useListState-CC04pTqu.js";import"./useHighlightSelectionDescription-C3_HKyAV.js";import"./useUpdateEffect-DonTD7t0.js";import"./useHasTabbableChild-CyDi0rgY.js";import"./check-DIg0TREH.js";import"./ListBoxSection-CWfDsKD7.js";import"./Virtualizer-0eSr7vNt.js";import"./useObserveElement-mzRvlMrW.js";import"./chevron-down-Bt5PPtNz.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-JjUCwn1t.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
