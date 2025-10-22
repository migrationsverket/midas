import{j as n}from"./iframe-C-Iz7t6i.js";import{$ as j}from"./Form-gJM36v-Q.js";import{G}from"./Grid-Buq4ogLv.js";import{G as e}from"./GridItem-Y_zvbJTx.js";import{T as r}from"./TextField-BN19O6YA.js";import{S as I}from"./Select-DrSfWRw_.js";import{B as a}from"./Button-CpYljy5F.js";import{R as g,a as b}from"./Radio-DNYO9s5B.js";import{C as h}from"./CheckboxGroup-B2wwlJfv.js";import{C as k}from"./Checkbox-Cbydp241.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CAdDMJK0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C-o4sd_e.js";import"./useFocusRing-De_0TNrE.js";import"./index-GuzIBqYd.js";import"./index-R4lrnf9Z.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Az9fTiCX.js";import"./TextField-BU9zjKI-.js";import"./FieldError-BHsH0zgL.js";import"./Text-Bn9yFLt3.js";import"./Text-BDiKw_g1.js";import"./RSPContexts-Cmiq4kNp.js";import"./Group-Tmru0VHI.js";import"./Input-BMTqvnjG.js";import"./Hidden-D-7VMopT.js";import"./Button-BkoGYE1W.js";import"./useLabels-CvJrZY8k.js";import"./useButton-DawvbpK9.js";import"./useTextField-BllUq10U.js";import"./useControlledState-Dc_4UTe2.js";import"./useField-CGYPppZ6.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-D1ywWQWw.js";import"./Dialog-DUOaYIsG.js";import"./OverlayArrow-e-DiyR2A.js";import"./useResizeObserver-BycTE8pF.js";import"./Collection-DvU4f6V1.js";import"./index-B6-XOfYU.js";import"./Separator-DzUwmt-z.js";import"./SelectionManager-DVt92HLx.js";import"./useEvent-oq9Y1YOs.js";import"./scrollIntoView-CSgwx9N8.js";import"./SelectionIndicator-DULyMaTo.js";import"./useDescription-DjbadPBe.js";import"./ListKeyboardDelegate-cqiw3FtI.js";import"./PressResponder-DESzPfXp.js";import"./useLocalizedStringFormatter-YclNVuG_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Dv4xV-sl.js";import"./VisuallyHidden-D8rluU4z.js";import"./useLocalizedStringFormatter-DQtv4EZ3.js";import"./x-9vyyRTLN.js";import"./createLucideIcon-CgI9-cy6.js";import"./Heading-D-MlOLZi.js";import"./info-JojYc3jR.js";import"./Popover-BlpU_6JO.js";import"./Tag-DOyrnzGv.js";import"./ListBox-CatalVQK.js";import"./DragAndDrop-BtgsyZMl.js";import"./inertValue-3YLKBS7t.js";import"./useListState-D9owg7Mu.js";import"./useHighlightSelectionDescription-Igzpa33s.js";import"./useUpdateEffect-D08oHLV5.js";import"./useHasTabbableChild-QsKcLBR-.js";import"./check-DDscNWRC.js";import"./ListBoxSection-39hLWp6f.js";import"./Virtualizer-DLc9hBrV.js";import"./chevron-down-CyogGEyL.js";import"./ListBoxPopover-D86xxb1J.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-C1ay7cgd.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
