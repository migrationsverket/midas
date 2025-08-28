import{j as n}from"./iframe-CMJJFu9j.js";import{$ as j}from"./Form-Cm-wtk2z.js";import{G}from"./Grid-v-_JIMIX.js";import{G as e}from"./GridItem-IGryYGfm.js";import{T as r}from"./TextField-Cnq0cIjy.js";import{S as I}from"./Select-CHkyOTnv.js";import{B as a}from"./Button-uBzb6nr4.js";import{R as g,a as b}from"./Radio-DtZadg6s.js";import{C as h}from"./CheckboxGroup-BnBg9VPH.js";import{C as k}from"./Checkbox-Z9jgUUzb.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-k_xI_0Cb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-hd5HHKBl.js";import"./useFocusRing-CtdsP9bS.js";import"./index-CwgxdM1g.js";import"./index-DjCmhbBj.js";import"./TextFieldBase-BaXpndh9.js";import"./TextField-BA5NR23u.js";import"./FieldError-BD_Req8T.js";import"./Text-CFor_277.js";import"./Text-C03sUZOQ.js";import"./Input-DyLIT5pf.js";import"./Hidden-DaCgDddU.js";import"./Button-Ze04MXeZ.js";import"./useLabels-D-FjqiKN.js";import"./useButton-CML0kvkr.js";import"./useTextField-DVRwiTC8.js";import"./useControlledState-y9SwHo4i.js";import"./useField-YfpEX8Zc.js";import"./TextField.module-D7za08S7.js";import"./Label-PxrgVU9S.js";import"./Dialog-BuG_2nD6.js";import"./RSPContexts-0c50kf5X.js";import"./OverlayArrow-8eERRl8G.js";import"./useResizeObserver-Yfq3l_iW.js";import"./Collection-D2hEZ6rK.js";import"./index-ZSaWV6Ce.js";import"./Separator-w4qZNhZD.js";import"./SelectionManager-Bf0z9v4v.js";import"./useEvent-BVm9IIGt.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B8C7Jeuo.js";import"./useDescription-D1IYUz-q.js";import"./ListKeyboardDelegate-fe9nQNr1.js";import"./PressResponder-BBeMaEjo.js";import"./useLocalizedStringFormatter-Du1HXXHm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DluAf_o6.js";import"./Dialog-BrlkvhaX.js";import"./useLocalizedStringFormatter-bIjgaKBM.js";import"./x-BC4hRGwZ.js";import"./createLucideIcon-BNAnTsQ1.js";import"./Heading-CnbgLzF8.js";import"./info-DVjcZCIP.js";import"./Tag-BVaZ_ogG.js";import"./ListBox-BkRANfor.js";import"./DragAndDrop-CQDhxp56.js";import"./inertValue-CmQznK0B.js";import"./useListState-LKyWzhej.js";import"./useHighlightSelectionDescription-CKhlhFyK.js";import"./useUpdateEffect-r2iZXFcp.js";import"./useHasTabbableChild-_4F5qNJM.js";import"./check-DgJX186j.js";import"./ListBoxSection-lAhH76dU.js";import"./Virtualizer-BztCy-IL.js";import"./useObserveElement-BBaCzOhm.js";import"./chevron-down-CbWJIlfa.js";import"./Button.module-DKVuWS4g.js";import"./Group-jqW65Jpa.js";import"./useToggleState-CF3-Y7Qg.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
