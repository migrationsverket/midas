import{j as n}from"./iframe-J53WtVro.js";import{$ as j}from"./Form-SckDLUbq.js";import{G}from"./Grid-CadnvExd.js";import{G as e}from"./GridItem-CuuXcizN.js";import{T as r}from"./TextField-BFZbrqcH.js";import{S as I}from"./Select-CW_QFESf.js";import{B as a}from"./Button-CIfoJTod.js";import{R as g,a as b}from"./Radio-De-uESJX.js";import{C as h}from"./CheckboxGroup-CBqsRtvl.js";import{C as k}from"./Checkbox-Sa0-z34k.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Dd1XRbvw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CGS9V-td.js";import"./useFocusRing-C_tBI-D0.js";import"./index-1yWuKSHu.js";import"./index-z-bQo5tN.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CvOyExHB.js";import"./TextField-EizZvoVh.js";import"./FieldError-CDhmuSkr.js";import"./Text-C9WDdtoF.js";import"./Text-B6RNBL1x.js";import"./context-D3xY0rMX.js";import"./SelectionManager-CdJA8enP.js";import"./useEvent-DxRB6st5.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BWgEKVmM.js";import"./useDescription-CvfC6qvL.js";import"./useControlledState-nESv1QH5.js";import"./Group-thC6UnAq.js";import"./Input-CM6tLFvZ.js";import"./Hidden-CTpn1EXc.js";import"./Button-C2zMdysb.js";import"./useLabels-BwK-_98z.js";import"./useButton-B90o1QtG.js";import"./useTextField-B4dKyjhw.js";import"./useField-CYlXh6Yi.js";import"./TextField.module-DjUItNl5.js";import"./Label-D3gfuD25.js";import"./Dialog-CvMm06Ji.js";import"./RSPContexts-vWZFNHe_.js";import"./OverlayArrow-DzqP8r-X.js";import"./useResizeObserver-B_xkgzdd.js";import"./Collection-EOfPIafc.js";import"./index-DMUOdCqd.js";import"./Separator-XvmeR4jg.js";import"./PressResponder-BIbzXn9j.js";import"./useLocalizedStringFormatter-rBWUfWya.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DPnZONxl.js";import"./useLocalizedStringFormatter-Do97QHCH.js";import"./x-D9FzPGEk.js";import"./createLucideIcon-0Y1ZYtFF.js";import"./Heading-pjZGR7li.js";import"./info-ZArjSycp.js";import"./Popover-C18Nd7SO.js";import"./Tag-RqOaUHPn.js";import"./ListBox-DDv9QZmF.js";import"./DragAndDrop-J_m4pktU.js";import"./inertValue-AzXVZ8gc.js";import"./useListState-CMihmLPj.js";import"./useHighlightSelectionDescription-Bluu_spL.js";import"./useUpdateEffect-COeJKl11.js";import"./useHasTabbableChild-PKrH7F6H.js";import"./check-Bclbknk3.js";import"./ListBoxSection-DC2H7SHk.js";import"./Virtualizer-DptVKC3Q.js";import"./useObserveElement--1ODp6sV.js";import"./chevron-down-B5cFproe.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-YQj2vieQ.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Nn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Nn as __namedExportsOrder,wn as default};
