import{j as n}from"./iframe-Buek6kz-.js";import{$ as j}from"./Form-DD675wMk.js";import{G}from"./Grid-Dun5eoJR.js";import{G as e}from"./GridItem-Dm9l6XdX.js";import{T as r}from"./TextField-D7dPzsNE.js";import{S as I}from"./Select-c7RN0mt1.js";import{B as a}from"./Button-DkPTbgVh.js";import{R as g,a as b}from"./Radio-C5RiqJyb.js";import{C as h}from"./CheckboxGroup-BcgXHhjZ.js";import{C as k}from"./Checkbox-DVI833IE.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CeaKCCXr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DlZ61Nmc.js";import"./useFocusRing-CXChxsND.js";import"./index-BVY5DqbJ.js";import"./index-Rjg-Au0Q.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CuS4ZUgc.js";import"./FieldError-QPrnD0HK.js";import"./Text-j6INtN3o.js";import"./Text-BjXMynj-.js";import"./RSPContexts-_pfma5_K.js";import"./Group-BLy8ZSjH.js";import"./Input-D86vUClg.js";import"./Hidden-0NE9Uh0U.js";import"./Button-C1GVd9vs.js";import"./useLabels-pfXsCxxY.js";import"./useButton-BRywGHaG.js";import"./useTextField-ClOaFVA7.js";import"./useControlledState-DA-5gQ4E.js";import"./useField-Czvowu87.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-ClZ9B5ve.js";import"./Dialog-CcgQWcgh.js";import"./OverlayArrow-diwwgesg.js";import"./useResizeObserver-X8alMgV-.js";import"./Collection-BpOZGhpH.js";import"./index-yFNkdEFF.js";import"./Separator-BpqaPhIE.js";import"./SelectionManager-Daog7qVx.js";import"./useEvent-CNClmccm.js";import"./scrollIntoView-DJz-hZZA.js";import"./SelectionIndicator-jJngRtJi.js";import"./useDescription-DMg79PJL.js";import"./ListKeyboardDelegate-DtL824MV.js";import"./PressResponder-gvUb4nnR.js";import"./useLocalizedStringFormatter-DIG43t3y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-B574bvB2.js";import"./VisuallyHidden-B5DH2MX5.js";import"./useLocalizedStringFormatter-TB867Ul8.js";import"./x-Boslj5Nc.js";import"./createLucideIcon-CboAl55C.js";import"./Heading-BA-d1ZGl.js";import"./info-CiCQZlll.js";import"./Popover-CAHK9i5g.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DbA9YLJ2.js";import"./DragAndDrop-BV2n2vdW.js";import"./inertValue-DWvn7dx3.js";import"./useListState-Dc2Q0NKm.js";import"./Tag-CwCTbGMC.js";import"./useHighlightSelectionDescription-DYk7CE-a.js";import"./useUpdateEffect-uBrq0rJG.js";import"./useHasTabbableChild-Da56nfvU.js";import"./chevron-down-DWpeFTUH.js";import"./ListBox-Dv3ameF1.js";import"./Virtualizer-C_F4cmX0.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BFHyrB2-.js";const Pn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
