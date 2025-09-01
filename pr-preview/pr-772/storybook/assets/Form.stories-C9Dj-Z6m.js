import{j as n}from"./iframe-BMmMZ3KQ.js";import{$ as j}from"./Form-Bj8lVYaJ.js";import{G}from"./Grid-C1rvquar.js";import{G as e}from"./GridItem-Dfc3gchm.js";import{T as r}from"./TextField-D8IgObcj.js";import{S as I}from"./Select-Be5MAb15.js";import{B as a}from"./Button-CHVH63zJ.js";import{R as g,a as b}from"./Radio-DOqBZ4vn.js";import{C as h}from"./CheckboxGroup-CAsoIgCq.js";import{C as k}from"./Checkbox-CHo0MHhW.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-xNuviegb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C5f_V4Kx.js";import"./useFocusRing-BLN4P0l8.js";import"./index-Bu4v8jR2.js";import"./index-ayWxPvH_.js";import"./TextFieldBase-miYuZulC.js";import"./TextField-DO7RwN5N.js";import"./FieldError-CcOt6V11.js";import"./Text-BZcgUTV9.js";import"./Text-B7FKNhU8.js";import"./ListKeyboardDelegate-C5eFPFPB.js";import"./SelectionManager-B3sDjCA-.js";import"./useEvent-dMl8FbRc.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-nZwB_i2O.js";import"./useDescription-BOxlfeZ7.js";import"./useControlledState-B57r2QjO.js";import"./Group-CApL6hhO.js";import"./Input-BqgBD6JA.js";import"./Hidden-Csnnc-5W.js";import"./Button-CAnGa41Q.js";import"./useLabels-bQhl9_tH.js";import"./useButton-C4rEA2ow.js";import"./useTextField-hoT73Lux.js";import"./useField-C3oaSnLU.js";import"./TextField.module-BrIGiDQC.js";import"./Label-CPE5A7Oo.js";import"./Dialog-Bt0MqwC7.js";import"./RSPContexts-CLPWtex2.js";import"./OverlayArrow-CwBdjG8J.js";import"./useResizeObserver-RyIsFguN.js";import"./Collection-DRKmQ10F.js";import"./index-Xlj1111l.js";import"./Separator-C2wHLlaf.js";import"./PressResponder-Bi6KCR59.js";import"./useLocalizedStringFormatter-BpLsT0Js.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-uFGgNwaA.js";import"./Dialog-CqokL0XO.js";import"./useLocalizedStringFormatter-DZEv_wL-.js";import"./x-ByopPi01.js";import"./createLucideIcon-nRYkhXZX.js";import"./Heading-mjA6FLze.js";import"./info-DRw6wnDc.js";import"./Tag-tsAh7CC5.js";import"./ListBox-BwOW5b4Z.js";import"./DragAndDrop-CIJxwyri.js";import"./inertValue-CzN8cl0m.js";import"./useListState-Dl-PJYav.js";import"./useHighlightSelectionDescription-CsotdiHy.js";import"./useUpdateEffect-ezomtBnJ.js";import"./useHasTabbableChild-CBQNbEJt.js";import"./check-DCekTWdl.js";import"./ListBoxSection-BApu-1qZ.js";import"./Virtualizer-Ci7vH12p.js";import"./useObserveElement-BO0OW5Zl.js";import"./chevron-down-DEsx_Zcn.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-Dbz5EVRE.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
