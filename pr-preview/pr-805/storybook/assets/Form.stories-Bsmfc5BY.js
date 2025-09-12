import{j as n}from"./iframe-Dz1UnDQW.js";import{$ as j}from"./Form-DkP8nNWR.js";import{G}from"./Grid-VGlfVElk.js";import{G as e}from"./GridItem-C74wOViK.js";import{T as r}from"./TextField-rZNGzScV.js";import{S as I}from"./Select-vK7xemjY.js";import{B as a}from"./Button-D0lqCjkx.js";import{R as g,a as b}from"./Radio-DZmx0N0N.js";import{C as h}from"./CheckboxGroup-CadUGsAp.js";import{C as k}from"./Checkbox-D2DJYBFI.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-hBfR_ZL0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dsj7gbha.js";import"./useFocusRing-DQLcIaLY.js";import"./index-_RMknSXq.js";import"./index-D5si8odx.js";import"./TextFieldBase-DeCO60Np.js";import"./TextField-CAdjA8rZ.js";import"./FieldError-By7F0JBO.js";import"./Text-DPFfR2fI.js";import"./Text-B_hwAu2M.js";import"./ListKeyboardDelegate-CxLOETdv.js";import"./SelectionManager-DWCindUv.js";import"./useEvent-DR5N8mNX.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CHYsshMk.js";import"./useDescription-Bq7ypDDL.js";import"./useControlledState-deC2Il6A.js";import"./Group-Bvrf7lOf.js";import"./Input-C6Xk4mZo.js";import"./Hidden-BBUsTMOw.js";import"./Button-Dl7oHVlG.js";import"./useLabels-CzYox2nz.js";import"./useButton-DcvL-sJ1.js";import"./useTextField-TJ5wdVBo.js";import"./useField-CQ3HzfQV.js";import"./TextField.module-DjUItNl5.js";import"./Label-BFyNqCy6.js";import"./Dialog-K0nlrg_Z.js";import"./RSPContexts-DUBxHIoQ.js";import"./OverlayArrow-HpLM2QOA.js";import"./useResizeObserver-w88vharR.js";import"./Collection-BIpz_TWK.js";import"./index-DYCSCNCJ.js";import"./Separator-DT-z2KHp.js";import"./PressResponder-DNQCsn6F.js";import"./useLocalizedStringFormatter-BQyNdzmW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Bc8MIhW1.js";import"./Dialog-DtvFxSIo.js";import"./useLocalizedStringFormatter-KmX2T5NT.js";import"./x-BBBAIg1N.js";import"./createLucideIcon-CjNT7EhR.js";import"./Heading-Rl3IW3hg.js";import"./info-BRbB8Ez-.js";import"./Tag-Bq0phQmZ.js";import"./ListBox-B5fELT3F.js";import"./DragAndDrop-CrLarA3C.js";import"./inertValue-C8ghuniP.js";import"./useListState-D-U06CIY.js";import"./useHighlightSelectionDescription-sGrg2CBg.js";import"./useUpdateEffect-BGFG0X4_.js";import"./useHasTabbableChild-C_I_QLxJ.js";import"./check-4sysR6Ml.js";import"./ListBoxSection-B1mBqKwE.js";import"./Virtualizer-EzGD9ppQ.js";import"./useObserveElement-C4YwCERD.js";import"./chevron-down-B67GakJC.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D7Pz9Xtg.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
