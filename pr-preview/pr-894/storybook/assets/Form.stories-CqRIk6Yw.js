import{j as n}from"./iframe-tJ1bQdC5.js";import{$ as j}from"./Form-BdA4lVsZ.js";import{G}from"./Grid-JUgznLTT.js";import{G as e}from"./GridItem-Czsk423C.js";import{T as r}from"./TextField-BCB5Uu5r.js";import{S as I}from"./Select-DkliAnoG.js";import{B as a}from"./Button-DIbFlLKN.js";import{R as g,a as b}from"./Radio-PcKcUiMw.js";import{C as h}from"./CheckboxGroup-Bt2l7_ts.js";import{C as k}from"./Checkbox-BL2DPycX.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Dtxack5N.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C4XNkrvX.js";import"./useFocusRing-4WojVJSR.js";import"./index-DkpH3wrQ.js";import"./index-hqimuXeh.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-OcxxXpf0.js";import"./TextField-xFzsLzLC.js";import"./FieldError-Br8flm-d.js";import"./Text-BEYvTD8y.js";import"./Text-CAeSaTI6.js";import"./RSPContexts-BMGwmn_l.js";import"./Group-vbkSaaMC.js";import"./Input-BsLIQjgo.js";import"./Hidden-CXq-jgdK.js";import"./Button-BRT3HrV0.js";import"./useLabels-Da4Pfe9K.js";import"./useButton-DAv_0PdS.js";import"./useTextField-DKiinBY2.js";import"./useControlledState-u6N7Zwya.js";import"./useField-BIoKLr4w.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DL2Y23vg.js";import"./Dialog-06VFX12S.js";import"./OverlayArrow-CVWHVuw2.js";import"./useResizeObserver-C5nBlwbD.js";import"./Collection-f3P3waPL.js";import"./index-BnzxF8u6.js";import"./Separator-8u1Zsf_8.js";import"./SelectionManager-DUp_tRyz.js";import"./useEvent-CVTaPBLg.js";import"./scrollIntoView-BzzKEx0E.js";import"./SelectionIndicator-27s8SBRr.js";import"./useDescription-HWLvDS9e.js";import"./ListKeyboardDelegate-C_9QbavB.js";import"./PressResponder-B7SkF4p-.js";import"./useLocalizedStringFormatter-o71fyDnk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CzTp92yE.js";import"./VisuallyHidden-D2Nh2DP9.js";import"./useLocalizedStringFormatter-BldM0njf.js";import"./x-Di-l2pcs.js";import"./createLucideIcon-DztohNQ2.js";import"./Heading-DKkJScvs.js";import"./info-f5kF2iLm.js";import"./Popover-ChnZEFjm.js";import"./Tag-y91OP7Tv.js";import"./ListBox-DNog3C_s.js";import"./DragAndDrop-DAPXFB6f.js";import"./inertValue-BWFkyBDM.js";import"./useListState-DWIFYhx4.js";import"./useHighlightSelectionDescription-8lMMV4li.js";import"./useUpdateEffect-DmodTaVU.js";import"./useHasTabbableChild-CB97k3xm.js";import"./check-BQS9d4oB.js";import"./ListBoxSection-X_c1XvZk.js";import"./Virtualizer-ZmZU7cu7.js";import"./chevron-down-Cud1Mq8v.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-TqHCv4Eb.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
