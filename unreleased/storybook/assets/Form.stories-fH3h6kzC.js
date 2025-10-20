import{j as n}from"./iframe-CP8t-7hT.js";import{$ as j}from"./Form-CNW9cKC6.js";import{G}from"./Grid-9NzosF2n.js";import{G as e}from"./GridItem-D5H9Y9de.js";import{T as r}from"./TextField-BCa20w9b.js";import{S as I}from"./Select-CoYpMZLC.js";import{B as a}from"./Button-BCN6Sz20.js";import{R as g,a as b}from"./Radio-C7Tok7rw.js";import{C as h}from"./CheckboxGroup-DWYVOpiU.js";import{C as k}from"./Checkbox-DKFru0J0.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CgUAWCd-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C62Kk6KS.js";import"./useFocusRing-rZvJgEnD.js";import"./index-DdbbECxV.js";import"./index-D_9FfvpY.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Cf_9pSYH.js";import"./TextField-CR9CJ_cw.js";import"./FieldError-BaWV3TWf.js";import"./Text-COmmnbBb.js";import"./Text-yuNGK2V9.js";import"./RSPContexts-C69vMCqc.js";import"./Group-DlxNOa6n.js";import"./Input-LRFR73IN.js";import"./Hidden-DxP2WVSo.js";import"./Button-CtnqP9ZF.js";import"./useLabels-B2_TbHUR.js";import"./useButton-BNwtkWJP.js";import"./useTextField-B6WFrvPI.js";import"./useControlledState-CIabsbOP.js";import"./useField-BRWVHp0-.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BVWCDqNP.js";import"./Dialog-DvrkGUyr.js";import"./OverlayArrow-B4fKslX7.js";import"./useResizeObserver-CrozXOe-.js";import"./Collection-jSH0lxDO.js";import"./index-BfYu5sot.js";import"./Separator-DmWdm9Jc.js";import"./SelectionManager-CQmX5aOD.js";import"./useEvent-rO1MhcNK.js";import"./scrollIntoView-B3IcIZeX.js";import"./SelectionIndicator-CP3nq0sB.js";import"./useDescription-ZOA1i6Gi.js";import"./ListKeyboardDelegate-CKUKnBJk.js";import"./PressResponder-DTWJFd1i.js";import"./useLocalizedStringFormatter-AJdvOD1o.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent--dLjMsCX.js";import"./VisuallyHidden-D69BQ_-T.js";import"./useLocalizedStringFormatter-B_PJgguy.js";import"./x-lKM-jy32.js";import"./createLucideIcon-Dw0tc5YB.js";import"./Heading-BQtR2jMU.js";import"./info-C9TyWhJC.js";import"./Popover-BEx5A8e4.js";import"./Tag-Dh9LImZe.js";import"./ListBox-Djeh-Iat.js";import"./DragAndDrop-DkHVbcxa.js";import"./inertValue-DlHMcCuJ.js";import"./useListState-SMQ1G33q.js";import"./useHighlightSelectionDescription-DuNSbGU_.js";import"./useUpdateEffect-Cy7nJGWo.js";import"./useHasTabbableChild-CY2MYOld.js";import"./check-CO0qazOA.js";import"./ListBoxSection-CcsJPkIy.js";import"./Virtualizer-pmCBn9Xg.js";import"./chevron-down-BpqdHgUt.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CIsQwsuj.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
