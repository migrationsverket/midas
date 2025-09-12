import{j as n}from"./iframe-D4K27_5V.js";import{$ as j}from"./Form-BLy0NNIl.js";import{G}from"./Grid-AmTZT5Hb.js";import{G as e}from"./GridItem-MzdboJhs.js";import{T as r}from"./TextField-C50bBtWY.js";import{S as I}from"./Select-BXVJSeh8.js";import{B as a}from"./Button-_LTHwKbK.js";import{R as g,a as b}from"./Radio-BatwBiE4.js";import{C as h}from"./CheckboxGroup-SBz74ix4.js";import{C as k}from"./Checkbox-h4J4foqf.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-fVNvPO-w.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cx27dkvI.js";import"./useFocusRing-BPtv8tcC.js";import"./index-CIcg5liC.js";import"./index-Cxuq5XzM.js";import"./TextFieldBase-BON8ze8u.js";import"./TextField-Dznt0Jtv.js";import"./FieldError-DhrH8PUd.js";import"./Text-CCrL_kaC.js";import"./Text-C2mhrnjn.js";import"./ListKeyboardDelegate-B1KJgYtu.js";import"./SelectionManager-CIQFQq5i.js";import"./useEvent-Bc6P_6ix.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Dunk2sKd.js";import"./useDescription-aANGJY3q.js";import"./useControlledState-DMUKsyYD.js";import"./Group-CPmS-5cz.js";import"./Input-DFkJwUlR.js";import"./Hidden-B2IDRFyp.js";import"./Button-BVRCvG9S.js";import"./useLabels-CSxMFmxj.js";import"./useButton-DkqzWIBM.js";import"./useTextField-B4v0NkkB.js";import"./useField-tGwc_1bk.js";import"./TextField.module-DjUItNl5.js";import"./Label-D3aRL3hO.js";import"./Dialog-DmoUwutb.js";import"./RSPContexts-BO1wlO5S.js";import"./OverlayArrow-BBJSFWx_.js";import"./useResizeObserver-BiG9yDht.js";import"./Collection-C_Epj3mC.js";import"./index-yHQXcvaH.js";import"./Separator-Bj8GAWeC.js";import"./PressResponder-DIzxswfR.js";import"./useLocalizedStringFormatter-BJhhj496.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-cGA-1A4N.js";import"./Dialog-ovzhFUUO.js";import"./useLocalizedStringFormatter-CLwIxfcd.js";import"./x-CmyPw_mS.js";import"./createLucideIcon-DvuL7sGH.js";import"./Heading-BMDBE_A4.js";import"./info-RMv7K6TQ.js";import"./Tag-Bp3mcneF.js";import"./ListBox-DxBbZgE3.js";import"./DragAndDrop-Arcjibxf.js";import"./inertValue-COdD19R6.js";import"./useListState-VA0ClCoh.js";import"./useHighlightSelectionDescription-DBQvnBa3.js";import"./useUpdateEffect-YOIlPIr1.js";import"./useHasTabbableChild-_o9R49ww.js";import"./check-B-vpoCoW.js";import"./ListBoxSection-C1QAMPn-.js";import"./Virtualizer-hFIbaNpo.js";import"./useObserveElement-BgKM0a-Y.js";import"./chevron-down-BpTpEbK8.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-UDMx4b0i.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
