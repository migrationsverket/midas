import{j as n}from"./iframe-7u0dyzmM.js";import{$ as j}from"./Form-bsz9-l3m.js";import{G}from"./Grid-B3C7JxYf.js";import{G as e}from"./GridItem-B2LSHwtg.js";import{T as r}from"./TextField-BSAhf3NR.js";import{S as I}from"./Select-B-4orOWp.js";import{B as a}from"./Button-BYmQpgdG.js";import{R as g,a as b}from"./Radio-DpylBTBJ.js";import{C as h}from"./CheckboxGroup-GQYas0-V.js";import{C as k}from"./Checkbox-BdOEV_am.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DlKeC_wY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B1v2lK3a.js";import"./useFocusRing-BKAWpehY.js";import"./index-BGNhFqDX.js";import"./index-BQkj4YBM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BBdAkE19.js";import"./TextField-DCJNiuX3.js";import"./FieldError-RFuDIdZ3.js";import"./Text-BIieQ0Ym.js";import"./Text-DKn27fp5.js";import"./RSPContexts-DhzeblSu.js";import"./Group-DT44IxjD.js";import"./Input-DuSLrVWq.js";import"./Hidden-9uIU_xnA.js";import"./Button-D2ox7fmR.js";import"./useLabels-CxDjVDsQ.js";import"./useButton-CkipRFbc.js";import"./useTextField-BcJRExeP.js";import"./useControlledState-ChDJL78O.js";import"./useField-DjLhajCl.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-C5BIigi2.js";import"./Dialog-DiZKBnaF.js";import"./OverlayArrow-CCrPSEND.js";import"./useResizeObserver-DBeOEqvn.js";import"./Collection-d6QZJlU4.js";import"./index-DTSq7p8I.js";import"./Separator-6JO9T_OZ.js";import"./SelectionManager-BpEt2XtE.js";import"./useEvent-uMhplNue.js";import"./scrollIntoView-qAs7qZJb.js";import"./SelectionIndicator-B9WqZUm6.js";import"./useDescription-CasTk3LW.js";import"./ListKeyboardDelegate-j5BgHi8H.js";import"./PressResponder-Di5wLCIS.js";import"./useLocalizedStringFormatter-D3d8wPmJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DpdBnh_t.js";import"./VisuallyHidden-DJpcktHT.js";import"./useLocalizedStringFormatter-Bt4k8eBd.js";import"./x-B6yzltLC.js";import"./createLucideIcon-BDGWcqXf.js";import"./Heading-gnjwPAY0.js";import"./info-BDeMW8DA.js";import"./Popover-B32QMxP9.js";import"./Tag-Cy0bmImv.js";import"./ListBox-BTRcRsWW.js";import"./DragAndDrop-DQFgBsIw.js";import"./inertValue-pSEqToZE.js";import"./useListState-BHFkoXDr.js";import"./useHighlightSelectionDescription-BulLkq0m.js";import"./useUpdateEffect-DVntQfUm.js";import"./useHasTabbableChild-rI5324QI.js";import"./check-CdeZ_VY9.js";import"./ListBoxSection--_aR5NNd.js";import"./Virtualizer-BsfZoHtW.js";import"./chevron-down-DGSbsFmv.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BT7jGiDt.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
