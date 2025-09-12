import{j as n}from"./iframe-DNw5ug4W.js";import{$ as j}from"./Form-C_ynKqtU.js";import{G}from"./Grid-Dl61131E.js";import{G as e}from"./GridItem-B1ojeOXq.js";import{T as r}from"./TextField-Bs4bzY5K.js";import{S as I}from"./Select-j6FND6W7.js";import{B as a}from"./Button-CnaT5HZD.js";import{R as g,a as b}from"./Radio-CA1SL-UT.js";import{C as h}from"./CheckboxGroup-ZQ_OyWDi.js";import{C as k}from"./Checkbox-B4MAzZC7.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B0W-visT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dsr2eczT.js";import"./useFocusRing-C3Vxp-UQ.js";import"./index-CXx1hM3Q.js";import"./index-B6SFiXqs.js";import"./TextFieldBase-D8kuMSIJ.js";import"./TextField-DhLPWPEE.js";import"./FieldError-UXxCthkk.js";import"./Text-p8qs57Vd.js";import"./Text-zEaZbX3X.js";import"./ListKeyboardDelegate-DJDbz__W.js";import"./SelectionManager-B4sQrBSO.js";import"./useEvent-D_nKl7gN.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C117i9z6.js";import"./useDescription-DBV8OUlS.js";import"./useControlledState-D9EAhMko.js";import"./Group-n7dvD8pG.js";import"./Input-C_wUReAl.js";import"./Hidden-D7JAk5rH.js";import"./Button-CNwqnN_t.js";import"./useLabels-pIafO9rG.js";import"./useButton-D45suQQo.js";import"./useTextField-BVSwGtIR.js";import"./useField-JQH1jenM.js";import"./TextField.module-DjUItNl5.js";import"./Label-7vk1bkuJ.js";import"./Dialog-DUyNT8n4.js";import"./RSPContexts-SdQ1qyg3.js";import"./OverlayArrow-DEFnGI0X.js";import"./useResizeObserver-DIiuaJmW.js";import"./Collection-Cuoal7LT.js";import"./index-CgCCcem7.js";import"./Separator-DSkLr5b2.js";import"./PressResponder-ms7zFkNV.js";import"./useLocalizedStringFormatter-Dj6fJ7EZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-3ARfOt-q.js";import"./Dialog-BEQVTCkg.js";import"./useLocalizedStringFormatter-DsnwkU1_.js";import"./x-CVyYbPZA.js";import"./createLucideIcon-lEiWpgzy.js";import"./Heading-Geo-Uwc3.js";import"./info-Bm-2O3m2.js";import"./Tag-CyePb2yT.js";import"./ListBox-Dnv4Jzs4.js";import"./DragAndDrop-Dysk2KE3.js";import"./inertValue-C2ibBsDx.js";import"./useListState-Ddjsd0E2.js";import"./useHighlightSelectionDescription-Bz2m2AIC.js";import"./useUpdateEffect-CSzsDENM.js";import"./useHasTabbableChild-CZUm_BSI.js";import"./check-BoBTwmmy.js";import"./ListBoxSection-Bp8lmD_D.js";import"./Virtualizer-CVy227Bn.js";import"./useObserveElement-VClRVt23.js";import"./chevron-down-DAWCsppH.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-B0ghRx8u.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
