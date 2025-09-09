import{j as n}from"./iframe-BWPOx-Jt.js";import{$ as j}from"./Form-B0PsGOdI.js";import{G}from"./Grid-5ebKeILx.js";import{G as e}from"./GridItem-UeNwFrWW.js";import{T as r}from"./TextField-CYjEWOfr.js";import{S as I}from"./Select-C-5th3xD.js";import{B as a}from"./Button-Cfr2QKY1.js";import{R as g,a as b}from"./Radio-C-g_bLhz.js";import{C as h}from"./CheckboxGroup-D9XVtH6b.js";import{C as k}from"./Checkbox-bh5nsay1.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-YC9dNSxW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DLE3QJgx.js";import"./useFocusRing-DBatYMKz.js";import"./index-CFQmPyTe.js";import"./index-DLS7hvaV.js";import"./TextFieldBase-CZr28FxZ.js";import"./TextField-v0OxgczQ.js";import"./FieldError-ByZsfcqf.js";import"./Text-BsnGlkv0.js";import"./Text-PjoTK9uN.js";import"./ListKeyboardDelegate-CCupp3xu.js";import"./SelectionManager-B3faZ9F3.js";import"./useEvent-CdwV2_y-.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DEs6W4Uy.js";import"./useDescription-3gvW5kZl.js";import"./useControlledState-Cwww_nOC.js";import"./Group-CkIu9nq-.js";import"./Input-DdaZEgNS.js";import"./Hidden-NTK_ysp7.js";import"./Button-CxYOnaMV.js";import"./useLabels-bm0A7JuF.js";import"./useButton-B5G9mTnP.js";import"./useTextField-DqhljN2s.js";import"./useField-B-pZNdaf.js";import"./TextField.module-8oYDuXgF.js";import"./Label-BD46ZioI.js";import"./Dialog-D9GE_3bF.js";import"./RSPContexts-DiGJJVWF.js";import"./OverlayArrow-b_jg_ktv.js";import"./useResizeObserver-jpcLKfIT.js";import"./Collection-co_aTZm4.js";import"./index-B81C4A5n.js";import"./Separator-DyUpiKMx.js";import"./PressResponder-DnPDET3-.js";import"./useLocalizedStringFormatter-URY1fSTo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DC2Wva-G.js";import"./Dialog-5WbsTzHt.js";import"./useLocalizedStringFormatter-LAfkMbSh.js";import"./x-_Yh4j0NG.js";import"./createLucideIcon-DVB7Rd3Y.js";import"./Heading-Bjtc6Ehi.js";import"./info-CA281HgX.js";import"./Tag-C334iL3C.js";import"./ListBox-CwpnSIVa.js";import"./DragAndDrop-C83HZICS.js";import"./inertValue-pwbckRE5.js";import"./useListState-81_wpXmr.js";import"./useHighlightSelectionDescription-CEB36BoX.js";import"./useUpdateEffect-C10ChMaS.js";import"./useHasTabbableChild-CkZOn-1E.js";import"./check-BFJYGkN2.js";import"./ListBoxSection-EAKtZtSZ.js";import"./Virtualizer-BqEeqwda.js";import"./useObserveElement-BLIT1kgV.js";import"./chevron-down-C9oMT7HI.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-BPoD34S9.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
