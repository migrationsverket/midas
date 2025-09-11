import{j as n}from"./iframe-Yvf0cSSB.js";import{$ as j}from"./Form-B9_RdxEY.js";import{G}from"./Grid-D8rZEqgy.js";import{G as e}from"./GridItem-BZPw1o0k.js";import{T as r}from"./TextField-CG2VXMz3.js";import{S as I}from"./Select-BDPU9D-b.js";import{B as a}from"./Button-BzZeqB_d.js";import{R as g,a as b}from"./Radio-y8qDyWyg.js";import{C as h}from"./CheckboxGroup-BTOXtDN0.js";import{C as k}from"./Checkbox-Bl1K6gkw.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DMvWELwu.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B0H8UhES.js";import"./useFocusRing-CSZDf5Vr.js";import"./index-CC1yabtT.js";import"./index-DltXTwhD.js";import"./TextFieldBase-DFiS_YNf.js";import"./TextField-CPQT5CO-.js";import"./FieldError-BhqcIOv_.js";import"./Text-DFXop-6v.js";import"./Text-DG8QqMfu.js";import"./ListKeyboardDelegate-CFa2tKLO.js";import"./SelectionManager-CF0YvsqB.js";import"./useEvent-DLimLjre.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DcwO8rah.js";import"./useDescription-CLy-rwID.js";import"./useControlledState-LYuGPegn.js";import"./Group-CXmmwbze.js";import"./Input-Cn6GDBpG.js";import"./Hidden-DTeDSlSg.js";import"./Button-Zpc5CpyC.js";import"./useLabels-d14Xm1VC.js";import"./useButton-B5Oo5gkj.js";import"./useTextField-CVPbhCTT.js";import"./useField-ZE_T0u1d.js";import"./TextField.module-DjUItNl5.js";import"./Label-CkbW2Wb9.js";import"./Dialog-BbL_wWoo.js";import"./RSPContexts-DoESg4H_.js";import"./OverlayArrow-kKlr8vKI.js";import"./useResizeObserver-BTc-B5o_.js";import"./Collection-CpaUCmPx.js";import"./index-DYhK9MOO.js";import"./Separator-Bh0om5Fg.js";import"./PressResponder-Dtqxoi83.js";import"./useLocalizedStringFormatter-Cn_yRCvO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C4yXVyeP.js";import"./Dialog-J-UoQJJQ.js";import"./useLocalizedStringFormatter-COIMHuWv.js";import"./x-Ch-i6AGU.js";import"./createLucideIcon-Be7gq-Id.js";import"./Heading-CEisJowX.js";import"./info-llb7MP8h.js";import"./Tag-DnmPukPb.js";import"./ListBox-DA0DyUAu.js";import"./DragAndDrop-CU5qta3N.js";import"./inertValue-CuV30K8b.js";import"./useListState-CVDnQdcy.js";import"./useHighlightSelectionDescription-CJbnAofX.js";import"./useUpdateEffect-V2H5XcPc.js";import"./useHasTabbableChild-GZ1mfTdJ.js";import"./check-yOdfHB-w.js";import"./ListBoxSection-DZn1eqPJ.js";import"./Virtualizer-BviUBHfj.js";import"./useObserveElement-Djk98YiD.js";import"./chevron-down-R9paI07-.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D5RacALv.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
