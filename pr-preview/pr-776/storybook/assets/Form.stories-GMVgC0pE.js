import{j as n}from"./iframe-ChCQmNBF.js";import{$ as j}from"./Form-CehF3tmr.js";import{G}from"./Grid-8nSiIE1j.js";import{G as e}from"./GridItem-_9hqxmF6.js";import{T as r}from"./TextField-BH8pAfXe.js";import{S as I}from"./Select-mU7AE0v1.js";import{B as a}from"./Button-DNKTHKFx.js";import{R as g,a as b}from"./Radio-CR0aYGr-.js";import{C as h}from"./CheckboxGroup-BS6nX4Oc.js";import{C as k}from"./Checkbox-QWIdx5el.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-ByU4BYui.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ChId9c0l.js";import"./useFocusRing-H_pQgntn.js";import"./index-BPms665e.js";import"./index-DtCR5Fkz.js";import"./TextFieldBase-Dp-QtdoR.js";import"./TextField-RsZhIj-e.js";import"./FieldError-DkPiT0-d.js";import"./Text-rHbNf24l.js";import"./Text-Co7JZnN_.js";import"./ListKeyboardDelegate-DRHXcqgK.js";import"./SelectionManager-BnjxOs0K.js";import"./useEvent-BpoqnHr9.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CoCJr3R-.js";import"./useDescription-DN7g7ZVI.js";import"./useControlledState-C93X6kj-.js";import"./Group-BdWKn7al.js";import"./Input-BtuiitUZ.js";import"./Hidden-CthOeGBp.js";import"./Button-tfBeC3AL.js";import"./useLabels-D_zZDSz7.js";import"./useButton-DWSISmjd.js";import"./useTextField-DnM8j3_k.js";import"./useField-BiTw7nwt.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-CA6_gWsZ.js";import"./Dialog-BK5YtqfR.js";import"./RSPContexts-BVacLies.js";import"./OverlayArrow-oXFJAAcw.js";import"./useResizeObserver-ETpYVBl6.js";import"./Collection-CHxfAZss.js";import"./index-Dpmc7HYB.js";import"./Separator-27wdvmvG.js";import"./PressResponder-BvzVt8eu.js";import"./useLocalizedStringFormatter-Cx8YpxIu.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-ShSB9PNa.js";import"./Dialog-BEUxC6Yb.js";import"./useLocalizedStringFormatter-2mH18Ecy.js";import"./x-BNteJ1LE.js";import"./createLucideIcon-5zSNQhkM.js";import"./Heading-CcNDf9yd.js";import"./info-CyGeA2j4.js";import"./Tag-BE697ptX.js";import"./ListBox-zaP9DpIe.js";import"./DragAndDrop-BKb05Jf3.js";import"./inertValue-DMqfGeAy.js";import"./useListState-BUx2So6j.js";import"./useHighlightSelectionDescription-FpCCrqDy.js";import"./useUpdateEffect-Zb5QYo2M.js";import"./useHasTabbableChild-Sgz7USKZ.js";import"./check-CKs4ncKx.js";import"./ListBoxSection-CRHoK0jK.js";import"./Virtualizer-xOYQ9ZIm.js";import"./useObserveElement-BdTS_m4V.js";import"./chevron-down-C5bSUP73.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-D44xfJud.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
