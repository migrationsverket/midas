import{j as n}from"./iframe-jnlgsi9p.js";import{$ as j}from"./Form-RoiJzAfN.js";import{G}from"./Grid-Dfbxv84h.js";import{G as e}from"./GridItem-D56urk9c.js";import{T as r}from"./TextField-CFxpG0He.js";import{S as I}from"./Select-B6TbGnJ8.js";import{B as a}from"./Button-C2vqzhjL.js";import{R as g,a as b}from"./Radio-DsbzOHQi.js";import{C as h}from"./CheckboxGroup-C5SVH_9T.js";import{C as k}from"./Checkbox-CnOGdBB-.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CJIIAbfy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D1ulX4Bq.js";import"./useFocusRing-CduhpbzF.js";import"./index-hU9uh3Ty.js";import"./index-VDpn7ZN8.js";import"./TextFieldBase-BZg7BOkV.js";import"./TextField-CNIIyj5u.js";import"./FieldError-PB8y-8Z8.js";import"./Text-CHDgcuVh.js";import"./Text-Bgb4gqcP.js";import"./context-DeYE0Lf6.js";import"./SelectionManager-CE_VwxEo.js";import"./useEvent-nxTiz6Ut.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DFJfKqJg.js";import"./useDescription-C7X6UoWZ.js";import"./useControlledState-cdO1Ns9d.js";import"./Group-ctPBlOgb.js";import"./Input-sgjT1LBJ.js";import"./Hidden-CGBdorFB.js";import"./Button-BUM_H9uj.js";import"./useLabels-BYqPhjAl.js";import"./useButton-u4k2WJiq.js";import"./useTextField-C4LmDM3c.js";import"./useField-CZUIT90o.js";import"./TextField.module-DjUItNl5.js";import"./Label-CwC1poKt.js";import"./Dialog-1GbdGs5-.js";import"./RSPContexts-BtYTM4Zk.js";import"./OverlayArrow-BSCYenYt.js";import"./useResizeObserver-CvIBu8f8.js";import"./Collection-CF_DnWJS.js";import"./index-CO1f7Yh7.js";import"./Separator-CO1dhQBP.js";import"./PressResponder-sZlSXfTJ.js";import"./useLocalizedStringFormatter-C-YeUb4O.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Dd_QTpWu.js";import"./useLocalizedStringFormatter-1AlFl6oj.js";import"./x-DFR31Uv3.js";import"./createLucideIcon-CHU8THTT.js";import"./Heading-Bxyv7Aj7.js";import"./info-DDWJ6xQF.js";import"./Popover-v54iF3TH.js";import"./Tag-C-NdBK57.js";import"./ListBox-CKP-TiC5.js";import"./DragAndDrop-D5nCAUrT.js";import"./inertValue-BLfVphNo.js";import"./useListState-C3K6wrtT.js";import"./useHighlightSelectionDescription-BR2QjXsC.js";import"./useUpdateEffect-C38ihp_j.js";import"./useHasTabbableChild-2udmq2Bx.js";import"./check-c5xkQvVv.js";import"./ListBoxSection-CEjd6zih.js";import"./Virtualizer-BTQRFQez.js";import"./useObserveElement-B1d176R0.js";import"./chevron-down-BhWsdvAy.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-C4BhfU48.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
