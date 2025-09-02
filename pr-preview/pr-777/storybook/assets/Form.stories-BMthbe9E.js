import{j as n}from"./iframe-Cg8p5A7h.js";import{$ as j}from"./Form-BHlRlr1I.js";import{G}from"./Grid-C084c516.js";import{G as e}from"./GridItem-CDReqYCL.js";import{T as r}from"./TextField-sWW-hMDG.js";import{S as I}from"./Select-CtzT3-vm.js";import{B as a}from"./Button-D4_iLJHL.js";import{R as g,a as b}from"./Radio-4e01eP4M.js";import{C as h}from"./CheckboxGroup-roloNvx-.js";import{C as k}from"./Checkbox-BwILUFmZ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DqWd7jdc.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-GueieasW.js";import"./useFocusRing-cQN_Zdfy.js";import"./index-8FyyBTVh.js";import"./index-Bt9MJrzz.js";import"./TextFieldBase-oSBC3BNn.js";import"./TextField-BasPC4i5.js";import"./FieldError-CkJMK0B1.js";import"./Text-Bm-1jYXF.js";import"./Text-BOHnLR8Q.js";import"./ListKeyboardDelegate-lCUnUTZS.js";import"./SelectionManager-DWrI5i-g.js";import"./useEvent-CiH5Y2ti.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DBeppB5M.js";import"./useDescription-QGjNPp3n.js";import"./useControlledState-CgxfEPxb.js";import"./Group-CxhK4Zby.js";import"./Input-DPZcOHHb.js";import"./Hidden-B_w65fFm.js";import"./Button-DeIhqKFB.js";import"./useLabels-B3LSmuof.js";import"./useButton-DvSlZoGX.js";import"./useTextField-ubWhCKIR.js";import"./useField-Do-f86aO.js";import"./TextField.module-BrIGiDQC.js";import"./Label-DP0uU8NU.js";import"./Dialog-qD_lOz3R.js";import"./RSPContexts-B8x6zBm2.js";import"./OverlayArrow-WCp1DD5Y.js";import"./useResizeObserver-qLLiiZ_t.js";import"./Collection-DGnHvId2.js";import"./index-B6E16G6R.js";import"./Separator-DdrI4Kg1.js";import"./PressResponder-eM6i-UmA.js";import"./useLocalizedStringFormatter-C0nB_sgu.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CWWkDShd.js";import"./Dialog-DZKmRCiR.js";import"./useLocalizedStringFormatter-gyRu2ina.js";import"./x-B3tqIUq_.js";import"./createLucideIcon-NwE9vuSB.js";import"./Heading-0e2a1HUv.js";import"./info-C974-Ydq.js";import"./Tag-_OtO_Nhj.js";import"./ListBox-BQOb6Ac2.js";import"./DragAndDrop-Dk_FsdWn.js";import"./inertValue-DZfcG0M7.js";import"./useListState-C8o8xfIt.js";import"./useHighlightSelectionDescription-B3TVEd-H.js";import"./useUpdateEffect-BLMOhH3t.js";import"./useHasTabbableChild-DpyiAX6F.js";import"./check-DOrlcnwE.js";import"./ListBoxSection-Dx6rtmqw.js";import"./Virtualizer-DJcL4IQy.js";import"./useObserveElement-CTbNU0jq.js";import"./chevron-down-BUzarVOO.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-BD6vRw8S.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
