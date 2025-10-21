import{j as n}from"./iframe-C9d1fKfO.js";import{$ as j}from"./Form-dJNhmH0N.js";import{G}from"./Grid-CqDXits5.js";import{G as e}from"./GridItem-CLqAJI3J.js";import{T as r}from"./TextField--Adr_105.js";import{S as I}from"./Select-DABTVoAz.js";import{B as a}from"./Button-CmAFj7fr.js";import{R as g,a as b}from"./Radio-DwSHD7Qy.js";import{C as h}from"./CheckboxGroup-B1WPP4hg.js";import{C as k}from"./Checkbox-BuaBd8c1.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-FbC4eyQm.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Do1rr7k6.js";import"./useFocusRing-CNCE1EVL.js";import"./index-CL2pwWhj.js";import"./index-D5XPD3lC.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DgS81CDQ.js";import"./TextField-ClPGOVcr.js";import"./FieldError-DjwVAz6m.js";import"./Text-DlJgJ_Ij.js";import"./Text-DWH4J3k4.js";import"./RSPContexts-CzQlP4zt.js";import"./Group-Bh_T_L1G.js";import"./Input-7PmuhNPg.js";import"./Hidden-Dl2QBsGx.js";import"./Button-BltcA86v.js";import"./useLabels-CU4SjVsy.js";import"./useButton-BCp__FJB.js";import"./useTextField-DwYRKTIi.js";import"./useControlledState-C2sRQUEB.js";import"./useField-BjtY2FCQ.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-1PHsd5RA.js";import"./Dialog-DrOwd862.js";import"./OverlayArrow-H0JJGBUK.js";import"./useResizeObserver-CG2O8Eq6.js";import"./Collection-C7v7MAjg.js";import"./index-B1lXgrjD.js";import"./Separator-D0nrjvPg.js";import"./SelectionManager-BbEKObbC.js";import"./useEvent-AXe0s0im.js";import"./scrollIntoView-BWXntg-O.js";import"./SelectionIndicator-C7PkPIB9.js";import"./useDescription-CnZvN1p9.js";import"./ListKeyboardDelegate-DwCB-Obb.js";import"./PressResponder-uzaWG3qw.js";import"./useLocalizedStringFormatter-COOSDuy1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DTPOKYa6.js";import"./VisuallyHidden-DZ0EnYOh.js";import"./useLocalizedStringFormatter-BxhVVbw4.js";import"./x-BpoIPd5U.js";import"./createLucideIcon-DSiO32JG.js";import"./Heading-Ba2f3hA9.js";import"./info-Cv3eFIc8.js";import"./Popover-CXtiiYA8.js";import"./Tag-CjCIYsSR.js";import"./ListBox-BZXgj4gJ.js";import"./DragAndDrop-B7DNFqEw.js";import"./inertValue-E0mhwZQe.js";import"./useListState-BVE34NVg.js";import"./useHighlightSelectionDescription-C-LDrj16.js";import"./useUpdateEffect-D0kiHgWb.js";import"./useHasTabbableChild-DVcN1Vvu.js";import"./check-DXIo6iOo.js";import"./ListBoxSection-Vvu_S_lg.js";import"./Virtualizer-ckEXEsal.js";import"./chevron-down-bVIxRdWi.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CzYqsahZ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
