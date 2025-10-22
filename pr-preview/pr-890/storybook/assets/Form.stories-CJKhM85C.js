import{j as n}from"./iframe-QMQOkqy7.js";import{$ as j}from"./Form-C3lHKZNg.js";import{G}from"./Grid-Z8IhC5pY.js";import{G as e}from"./GridItem-BUm0d--9.js";import{T as r}from"./TextField-CkowXbFA.js";import{S as I}from"./Select-Drdzjvsx.js";import{B as a}from"./Button-DKC-_1mU.js";import{R as g,a as b}from"./Radio-Ep6J7n5s.js";import{C as h}from"./CheckboxGroup-Bd7xI5bK.js";import{C as k}from"./Checkbox-4mW9ICFz.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BAiEHHfW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-HK7VnpfJ.js";import"./useFocusRing-3f63HxWi.js";import"./index-BssAuyxL.js";import"./index-D27tsFl4.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BViv_SM9.js";import"./TextField-BTnxha1b.js";import"./FieldError-l4QxPW55.js";import"./Text-CDgd7ago.js";import"./Text-Dkq7Xb_8.js";import"./RSPContexts-DVFkkORo.js";import"./Group-CzFsHkye.js";import"./Input-DpVMu_3e.js";import"./Hidden-aJdCmUNE.js";import"./Button-BCjENko5.js";import"./useLabels-DYqGyZvv.js";import"./useButton-5yRVOV4s.js";import"./useTextField-C6rX2HMw.js";import"./useControlledState-p0YhVlSr.js";import"./useField-DExMBizT.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CFEcUObL.js";import"./Dialog-DgCYuH65.js";import"./OverlayArrow-CkiBA-b7.js";import"./useResizeObserver-3cj6m-mT.js";import"./Collection-BfmtebLl.js";import"./index-ISiABSvj.js";import"./Separator-Bufhkhd4.js";import"./SelectionManager-C47D9CSS.js";import"./useEvent-BDkt6qkn.js";import"./scrollIntoView-BIvHZ8vP.js";import"./SelectionIndicator-DgVvlymX.js";import"./useDescription-BA4HuvfE.js";import"./ListKeyboardDelegate-G6RBeE81.js";import"./PressResponder-BuIyuvZt.js";import"./useLocalizedStringFormatter-C4BeT19Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-C4vB57gt.js";import"./VisuallyHidden-BJCw0vBr.js";import"./useLocalizedStringFormatter-bSCttsFr.js";import"./x-Dti6unlf.js";import"./createLucideIcon-BE-SrRY7.js";import"./Heading-D6JVQ9zJ.js";import"./info-D72TzXRD.js";import"./Popover-ONBDjZoB.js";import"./Tag-CLlywJs4.js";import"./ListBox-CmFM4XqA.js";import"./DragAndDrop-B00nZKyI.js";import"./inertValue-CQPysPk2.js";import"./useListState-z0mvMtsG.js";import"./useHighlightSelectionDescription-CY7WObIe.js";import"./useUpdateEffect-DVDvheic.js";import"./useHasTabbableChild-CjQqQo0p.js";import"./check-CvsL5X3w.js";import"./ListBoxSection-BhvMOk_A.js";import"./Virtualizer-DZBY1JT-.js";import"./chevron-down-D_Kd-uph.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-7g6pJoeF.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
