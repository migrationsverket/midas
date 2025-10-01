import{j as n}from"./iframe-DZTfVXGQ.js";import{$ as j}from"./Form-CJr5opkY.js";import{G}from"./Grid-BgOt79Jw.js";import{G as e}from"./GridItem-CmGR352c.js";import{T as r}from"./TextField-DzNfDIn7.js";import{S as I}from"./Select-DYeg-bnl.js";import{B as a}from"./Button-CSaYV3xb.js";import{R as g,a as b}from"./Radio-CZVmzY8h.js";import{C as h}from"./CheckboxGroup-DZCaEv8Y.js";import{C as k}from"./Checkbox-DM4LomA6.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-cZRrSnGR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D851Hw6-.js";import"./useFocusRing-BhkwFUJn.js";import"./index-B8OVC2IV.js";import"./index-DOYmBKHl.js";import"./TextFieldBase-_mTi9hJD.js";import"./TextField-Cg-dlbT-.js";import"./FieldError-BmiKjAu3.js";import"./Text-D-UQkD1n.js";import"./Text-UkuqMixp.js";import"./context-2Q8pDLJF.js";import"./SelectionManager-wIYi-s7u.js";import"./useEvent-C4O0pocU.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DOyCOTbb.js";import"./useDescription-CkclpBz2.js";import"./useControlledState-BvQ6p66K.js";import"./Group-D-dFPPDr.js";import"./Input-CnKnPeaa.js";import"./Hidden-CUrnj2CA.js";import"./Button-Ctxb8OrT.js";import"./useLabels-BLkLJ6wJ.js";import"./useButton-B5ZQkQ3z.js";import"./useTextField-B53Glduo.js";import"./useField-jYjnMkFT.js";import"./TextField.module-DjUItNl5.js";import"./Label-DPhlHthM.js";import"./Dialog-D7rj5y6p.js";import"./RSPContexts-Cd7Hr7VC.js";import"./OverlayArrow-Cn_FnIQH.js";import"./useResizeObserver-COGjWZD0.js";import"./Collection-DfK6mcV6.js";import"./index-BNSQdqWs.js";import"./Separator-CufbPKnn.js";import"./PressResponder-CbRbpInh.js";import"./useLocalizedStringFormatter-BMKV-HKX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BuQa8rh7.js";import"./useLocalizedStringFormatter-BTvnirip.js";import"./x-3bbKeNyO.js";import"./createLucideIcon-BokBmnjP.js";import"./Heading-BO9NY0Rk.js";import"./info-BkfXON5m.js";import"./Popover-WvRutwmf.js";import"./Tag-BRaUETeE.js";import"./ListBox-Do2RXFWq.js";import"./DragAndDrop-CztlcYiu.js";import"./inertValue-DNF7veo8.js";import"./useListState-DgivWjYX.js";import"./useHighlightSelectionDescription-D518wDY9.js";import"./useUpdateEffect-CEo5vuFQ.js";import"./useHasTabbableChild-B5XsnVCf.js";import"./check-DBs_z4LA.js";import"./ListBoxSection-C2zyaewj.js";import"./Virtualizer-DhQ1AOGx.js";import"./useObserveElement-KeqZCRhY.js";import"./chevron-down-Bw9UAFMp.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D4JYMUkY.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
