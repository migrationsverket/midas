import{j as n}from"./iframe-x1vxRFy2.js";import{$ as j}from"./Form-BHt7e57L.js";import{G}from"./Grid-Cw9pCN9k.js";import{G as e}from"./GridItem-uSHTNw3t.js";import{T as r}from"./TextField-DGpREaKP.js";import{S as I}from"./Select-DMqaiAeN.js";import{B as a}from"./Button-EVlCTy54.js";import{R as g,a as b}from"./Radio-DnhW1lo1.js";import{C as h}from"./CheckboxGroup-iY_mQygD.js";import{C as k}from"./Checkbox-9HLwuJm8.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BdXtedVQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CAtFrkYP.js";import"./useFocusRing-BEoUuYxc.js";import"./index-BqnQzRqX.js";import"./index-COCLYVOM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-V4LviR5t.js";import"./TextField-eYM5Y1_a.js";import"./FieldError-BexYYqp1.js";import"./Text-CspvyGUA.js";import"./Text-DS-vD4UE.js";import"./RSPContexts-Ddg9Yw_r.js";import"./Group-CG67NaNj.js";import"./Input-CrW1EIeZ.js";import"./Hidden-Bp4E1yxN.js";import"./Button-UXwUWitE.js";import"./useLabels-CwPqU8bm.js";import"./useButton-CjDE-RR1.js";import"./useTextField-DHhyCa_8.js";import"./useControlledState-D8Prs78J.js";import"./useField-DvVcrr9B.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-C8Iy8CXU.js";import"./Dialog-CSZm7lS7.js";import"./OverlayArrow-C5D7a2f7.js";import"./useResizeObserver-BKiO9p-a.js";import"./Collection-BQSBZM1f.js";import"./index-QakDA_uM.js";import"./Separator-m-lYZtgv.js";import"./SelectionManager-VmNO4qZ1.js";import"./useEvent-Dnubx1-c.js";import"./scrollIntoView-Cznxc45O.js";import"./SelectionIndicator-MN5uJlHl.js";import"./useDescription-B335ihPd.js";import"./ListKeyboardDelegate-B0ZRkyOh.js";import"./PressResponder-CQco448A.js";import"./useLocalizedStringFormatter-DlFFEDVW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DU_Kv_Jy.js";import"./VisuallyHidden-Ba6Nlqfo.js";import"./useLocalizedStringFormatter-DGMw_t47.js";import"./x-be3y5msS.js";import"./createLucideIcon-DVmyCMbG.js";import"./Heading-DGm5e8To.js";import"./info-AWailXl7.js";import"./Popover-aR51p1Wg.js";import"./Tag-Cq-M1XZt.js";import"./ListBox-DqRwr4Aq.js";import"./DragAndDrop-CUzLz8-d.js";import"./inertValue-aelLzkE1.js";import"./useListState-DOgiF9Y0.js";import"./useHighlightSelectionDescription-DoZnuWsP.js";import"./useUpdateEffect-CCO3GJEq.js";import"./useHasTabbableChild-C6jKjoM8.js";import"./check-idaCfc7K.js";import"./ListBoxSection-DLlAzMaQ.js";import"./Virtualizer-C1IDyLuk.js";import"./chevron-down-SwQdsHZt.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState--Y9Var5F.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
